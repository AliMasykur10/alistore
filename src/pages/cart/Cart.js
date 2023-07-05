import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/molecules/cartList/CartList";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="sm:max-w-7xl mx-auto sm:flex gap-3 mt-5 p-3">
      <div className="basis-2/3">
        <h1 className="text-3xl font-bold mb-10 ">Cart List</h1>
        <div className="">
          {cartItems.map((item, index) => (
            <CartList key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="basis-1/3">
        <h1 className="text-2xl font-bold mb-7">Summary</h1>
        <div className="flex justify-between mb-7">
          <p className="text-xl">Total</p>
          <p className="text-xl">$</p>
        </div>
        <button className=" text-xl font-bold outline outline-1 py-2 px-4 hover:bg-fontColor hover:text-white ">Checkout</button>
      </div>
    </div>
  );
}
