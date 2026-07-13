import { useParams } from "react-router-dom";
import { products } from "../data/data";
import ProductCard from "../components/productDetails/ProductCard";

function ProductDetails() {
  const { productId } = useParams();

  const product = products.find((p) => p.id === parseInt(productId, 10));
  const { name, price, img } = product;

  console.log(product);

  return (
    <div className="px-6 py-10">
      {product ? (
        <>
          <h1 className="mb-6 text-3xl font-semibold text-center">
            Product Details
          </h1>
          <ProductCard name={name} price={price} img={img} />
        </>
      ) : (
        <p className="text-xl font-bold text-center text-red-500">Not Found</p>
      )}
    </div>
  );
}

export default ProductDetails;
