function CartList() {
  return (
    <div className="mb-8">
      <h2 className="pb-2 mb-4 text-lg font-semibold border-b">Your Items:</h2>
      <ul className="space-y-2">
        <li className="flex justify-between pb-2 border-b item-center">
          <span>Product 1</span>
          <span>$25</span>
        </li>
        <li className="flex justify-between pb-2 border-b item-center">
          <span>Product 2</span>
          <span>$45</span>
        </li>
      </ul>
      <p className="mt-4 font-medium text-md">Total: $70</p>
    </div>
  );
}

export default CartList;
