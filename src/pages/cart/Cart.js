import React, { useState } from "react";
import CartList from "../../components/molecules/cartList/CartList";

export default function Cart() {
  const [data, setdata] = useState([]);
  return (
    <div className="sm:max-w-7xl mx-auto sm:flex gap-3 mt-5 ">
      <div className="basis-2/3">
        <h1 className="text-3xl font-bold">Cart List</h1>
        <div className="">
          <CartList />
        </div>
      </div>
      <div className="basis-1/3">
        <h1>Summary</h1>
        <button>Checkout</button>
      </div>
    </div>
  );
}
