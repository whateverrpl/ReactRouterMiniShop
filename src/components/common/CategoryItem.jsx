import { Link } from "react-router-dom";

function CategoryItem({ name, img }) {
  // Styles
  const itemSpan =
    "absolute z-10 text-xl font-semibold text-white transition-all ease-out group-hover:text-2xl";
  const itemShadow = "absolute inset-0 bg-gray-900 rounded-md opacity-40";

  return (
    <li className="mx-auto w-60">
      <Link
        className="relative flex flex-col items-center justify-center group"
        to={`/category/${name}`}
      >
        <span className={itemSpan}>{name}</span>
        <img className="rounded-md" src={img} alt={name} loading="lazy" />
        <div className={itemShadow} />
      </Link>
    </li>
  );
}

export default CategoryItem;
