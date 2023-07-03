import React from "react";

export default function Card({ data }) {
  return (
    <div className="bg-white shadow-lg p-4 flex flex-col justify-between mb-3">
      <div className=" sm:h-80 grid place-items-center">
        <img src={data.image} alt="#" className="w-44 object-cover mb-4 hover:scale-125 ease-in-out duration-200" />
      </div>
      <div className=" ">
        <h3 className=" sm:text-lg font-semibold mb-2">{data.title}</h3>
        <p className="text-gray-700 mb-4">${data.price}</p>
      </div>
      <div className=" flex gap-2 flex-col sm:justify-around sm:flex-row ">
        <button className="bg-blue-500 hover:bg-blue-600 outline outline-1 font-semibold py-1 sm:py-2 sm:px-4 hover:bg-fontColor hover:text-white transition-colors ">Buy Now</button>
        <button className="bg-blue-500 hover:bg-blue-600 outline outline-1 font-semibold py-1 sm:py-2 sm:px-4 hover:bg-fontColor hover:text-white transition-colors ">Add to Cart</button>
      </div>
    </div>
  );
}
