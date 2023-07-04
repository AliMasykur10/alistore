import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../services/reducer/carrtSlice/CartSlice";

export default function CartList({ data }) {
  const dispatch = useDispatch();

  const handlePrevClick = () => {
    console.log("onclick prev");
  };
  const HandleNextClick = () => {
    dispatch(addToCart(data));
  };

  return (
    <div className="flex gap-3 mb-5">
      <div className=" basis-1/5 ">
        <img src={data.image} alt="" className="h-24 mx-auto" />
      </div>
      <div className="basis-2/5">
        <h1 className="text-xl font-bold">{data.title}</h1>
        <p>${data.price}</p>
      </div>
      <div className="basis-1/5">
        <div className=" flex items-center gap-2">
          <box-icon name="left-arrow" type="solid" size="sm" onClick={handlePrevClick} />
          <p className="text-2xl font-bold">{data.quantity}x</p>
          <box-icon type="solid" name="right-arrow" size="sm" onClick={() => HandleNextClick()} />
        </div>
      </div>
      <div className="basis-1/5 mt-1 ">
        <box-icon name="x" size="sm" />
      </div>
    </div>
  );
}
