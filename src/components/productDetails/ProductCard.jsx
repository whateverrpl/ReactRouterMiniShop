function ProductCard({ name, price, img }) {
  return (
    <>
      <div className="flex flex-col items-center p-6 bg-white rounded-md">
        <h2 className="mb-2 text-xl font-semibold">{name}</h2>
        <p className="text-lg text-gray-700">Price: {price}$</p>
        <img className="mb-4 rounded-md w-80 h-80" src={img} alt={name} />
      </div>
    </>
  );
}

export default ProductCard;
