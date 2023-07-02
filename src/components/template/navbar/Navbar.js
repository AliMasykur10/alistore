import React from "react";
import logo from "./../../../assets/bx-cart-alt.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="flex justify-between sm:max-w-7xl mx-auto items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 mr-4" />
          <span className=" text-fontColor text-xl font-semibold">AliStore</span>
        </div>
        <div className="flex justify-center items-center relative">
          <input type="text" placeholder="Search" className="px-4 py-2 rounded-md bg-white focus:outline-none" />
          <button className="absolute right-2 top-2">
            <box-icon name="search-alt-2"></box-icon>
          </button>
        </div>
      </nav>
    </div>
  );
}
