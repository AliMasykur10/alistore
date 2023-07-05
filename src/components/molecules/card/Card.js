import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../services/reducer/carrtSlice/CartSlice";

export default function Card({ data }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  return (
    <div className="bg-white shadow-lg p-4 flex flex-col justify-between mb-3">
      <div className=" sm:h-80 grid place-items-center">
        <Link to={`/product/${data.title}/${data.id}`}>
          <img src={data.image} alt="#" className="w-44 object-cover mb-4 hover:scale-125 ease-in-out duration-200" />
        </Link>
      </div>
      <div className=" ">
        <Link to={`/product/${data.title}//${data.id}`}>
          <h3 className=" sm:text-lg font-semibold mb-2">{data.title}</h3>
        </Link>
        <p className="text-gray-700 mb-4">${data.price}</p>
      </div>
      <div className=" flex gap-2 flex-col sm:justify-around sm:flex-row ">
        <button className="bg-blue-500 hover:bg-blue-600 outline outline-1 font-semibold py-1 sm:py-2 sm:px-4 hover:bg-fontColor hover:text-white transition-colors ">
          <Link to={`/product/${data.title}/${data.id}`}>Buy Now</Link>
        </button>

        <button onClick={() => handleAddToCart()} className="bg-blue-500 hover:bg-blue-600 outline outline-1 font-semibold py-1 sm:py-2 sm:px-4 hover:bg-fontColor hover:text-white transition-colors ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
