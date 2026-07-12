import { categories } from "../data/data";

import CategoryItem from "../components/home/CategoryItem";

function Home() {
  return (
    <div className="py-10 sm:py-16">
      <h1 className="mb-6 text-3xl font-semibold text-center">Categories</h1>
      <ul className="grid grid-cols-5">
        {categories.map(({ id, name, img }) => (
          <CategoryItem key={id} name={name} img={img} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
