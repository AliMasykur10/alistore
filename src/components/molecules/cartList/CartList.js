import React from "react";
import { useDispatch } from "react-redux";

export default function CartList({ data }) {
  return (
    <div className="flex gap-3 mb-3">
      <div className=" basis-1/5 ">
        <img src={data.image} alt="" />
      </div>
      <div className="basis-2/5">
        <h1 className="text-xl font-bold">{data.title}</h1>
        <p>${data.price}</p>
      </div>
      <div className="basis-1/5">
        <p className="text-xl font-bold">{data.quantity}x</p>
        
      </div>
      <div className="basis-1/5">
        <button>remove</button>
      </div>
    </div>
  );
}
