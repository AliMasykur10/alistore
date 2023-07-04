import React from "react";
import { useDispatch } from "react-redux";

export default function CartList({ data }) {
  const dispatch = useDispatch();

  const removeHandle = (data) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: data });
  };

  console.log(data);
  return (
    <div className="flex gap-3 mb-3">
      <div className=" basis-1/5 ">
        <img src={data.image} alt="" />
      </div>
      <div className="basis-3/5">
        <h1 className="text-xl font-bold">{data.title}</h1>
        <p>${data.price}</p>
      </div>
      <div>
        <button>remove</button>
      </div>
    </div>
  );
}
