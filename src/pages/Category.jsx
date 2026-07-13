import { useParams, useSearchParams } from "react-router-dom";
import { products } from "../data/data";
import CategoryProduct from "../components/category/CategoryProduct";
import CategoryMaxPriceFilter from "../components/category/CategoryMaxPriceFilter";

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : Infinity;

  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId && product.price <= maxPrice,
  );

  function handleChange(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <div className="px-6 pt-12 pb-40">
      <h1 className="mb-6 text-3xl font-semibold text-center">
        Category {categoryId}
      </h1>
      <CategoryMaxPriceFilter
        value={searchParams.get("maxPrice") || ""}
        onChange={handleChange}
      />
      <ul className="grid grid-cols-4 px-5 pt-10">
        {currentCategoryArray.map((product) => (
          <CategoryProduct
            key={product.id}
            name={product.name}
            id={product.id}
            price={product.price}
            img={product.img}
          />
        ))}
      </ul>
    </div>
  );
}

export default Category;
