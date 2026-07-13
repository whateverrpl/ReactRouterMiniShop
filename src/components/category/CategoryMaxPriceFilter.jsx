function CategoryMaxPriceFilter({ value, onChange }) {
  return (
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-medium text-gray-700"
        htmlFor="maxPrice"
      >
        Max Price
      </label>
      <input
        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        type="number"
        id="maxPrice"
        placeholder="Enter max price"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CategoryMaxPriceFilter;
