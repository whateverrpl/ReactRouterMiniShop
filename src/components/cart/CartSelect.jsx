function CartSelect() {
  return (
    <div className="flex flex-col">
      <select
        className="p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
        id="payment"
        required
      >
        <option value="" disabled>
          Select payment method
        </option>
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="cash">Cash on Delivery</option>
      </select>
      <label
        className="text-sm text-gray-500peer-focus:text-blue-500"
        htmlFor="payment"
      >
        Payment Method
      </label>
    </div>
  );
}

export default CartSelect;
