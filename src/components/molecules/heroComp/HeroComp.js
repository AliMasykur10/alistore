import React from "react";
import { Link } from "react-router-dom";

export default function HeroComp({ data }, key) {
  // console.log(data);
  return (
    <div className="w-full flex flex-col-reverse sm:flex-row gap-10 sm:gap-4 sm:justify-around sm:items-center p-6">
      <div className="hero-description basis-1/2 sm:pl-12">
        <Link to={`/product/${data.id}`}>
          <h1 className="text-xl sm:text-3xl mb-5 font-bold">{data.title}</h1>
        </Link>
        <button className="px-4 py-2 outline  outline-1 hover:bg-fontColor hover:text-white transition-colors">
          <Link to={`/product/${data.id}`}>Buy Now</Link>
        </button>
      </div>
      <div className=" h-auto mx-auto sm:h-96">
        <Link to={`/product/${data.id}`}>
          <img className=" h-52 sm:w-full sm:h-96 " src={data.image} alt="" />
        </Link>
      </div>
    </div>
  );
}
