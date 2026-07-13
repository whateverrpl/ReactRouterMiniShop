import { Link } from "react-router-dom";

function CategoryProduct({ name, id, price, img }) {
  return (
    <li className="flex items-center justify-center mx-auto w-60">
      <Link
        className="relative flex flex-col items-center justify-center group"
        to={`/product/${id}`}
      >
        <span className="absolute z-10 text-xl font-semibold text-center text-white transition-all duration-200 group-hover:text-2xl">
          {name}
          <br />
          {price}$
        </span>

        <img className="rounded-md" src={img} alt={name} />

        <div className="absolute inset-0 bg-gray-900 rounded-md opacity-40" />
      </Link>
    </li>
  );
}

export default CategoryProduct;
