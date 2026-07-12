import CartButton from "../components/cart/CartButton";
import CartList from "../components/cart/CartList";
import CartSelect from "../components/cart/CartSelect";
import Input from "../components/common/Input";

function Cart() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="max-w-md p-5 py-16 mx-auto">
      <h1 className="mb-6 text-2xl font-semibold text-center">Shopping Cart</h1>

      <CartList />

      <form onSubmit={handleSubmit} className="space-y-5 ">
        <h2 className="text-lg font-semibold">Enter Your Details:</h2>

        <Input htmlForId="name" type="text" placeholder="Enter your full name">
          Name
        </Input>

        <Input
          htmlForId="email"
          type="email"
          placeholder="Enter your email address"
        >
          Email
        </Input>

        <Input
          isTextArea
          htmlForId="address"
          placeholder="Enter your delivery address"
          rows="3"
        >
          Address
        </Input>

        <CartSelect />
        <CartButton />
      </form>
    </div>
  );
}

export default Cart;
