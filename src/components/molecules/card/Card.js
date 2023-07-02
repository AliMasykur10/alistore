import React from "react";

export default function Card({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div className=" sm:h-80 grid place-items-center">
        <img src={data.image} alt="#" className="w-44 object-cover mb-4" />
      </div>
      <div className=" ">
        <h3 className=" text-xl sm:text-lg font-semibold mb-2">{data.title}</h3>
        <p className="text-gray-700 mb-4">$15.00</p>
      </div>
      <div className=" flex justify-around">
        <button className="bg-blue-500 hover:bg-blue-600 outline outline-1 font-semibold py-2 px-4">Buy Now</button>
        <button className="bg-blue-500 hover:bg-blue-600 outline outline-1 font-semibold py-2 px-4">Add to Cart</button>
      </div>
    </div>
  );
}
