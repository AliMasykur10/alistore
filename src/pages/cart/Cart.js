import React, { useEffect, useState } from "react";
import CartList from "../../components/molecules/cartList/CartList";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const items = useSelector((state) => state.items);
  const total = useSelector((state) => state.total);
  console.log(total);

  return (
    <div className="sm:max-w-7xl mx-auto sm:flex gap-3 mt-5 ">
      <div className="basis-2/3">
        <h1 className="text-3xl font-bold mb-10 ">Cart List</h1>
        <div className="">
          {items.length === 0 ? (
            <p className="text-xl">Your cart is empty</p>
          ) : (
            <div>
              {items.map((item, index) => (
                <CartList data={item} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="basis-1/3">
        <h1 className="text-2xl font-bold mb-7">Summary</h1>
        <div className="flex justify-between mb-7">
          <p className="text-xl">Total</p>
          <p className="text-xl">${total}</p>
        </div>
        <button className=" text-xl font-bold outline outline-1 py-2 px-4 hover:bg-fontColor hover:text-white ">Checkout</button>
      </div>
    </div>
  );
}
