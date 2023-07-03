import React from "react";
import logo from "./../../../assets/bx-cart-alt.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="flex justify-between sm:max-w-7xl mx-auto items-center p-4">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className=" text-fontColor text-xl sm:text-3xl font-semibold">AliStore</span>
          </div>
        </Link>
        <div className="sm:flex justify-center items-center relative hidden sm: ">
          <input type="text" placeholder="Search" className="px-4 py-2  sm:w-72 rounded-md bg-white focus:outline-none" />
          <button className="absolute right-2 top-2">
            <box-icon name="search-alt-2"></box-icon>
          </button>
        </div>
      </nav>
    </div>
  );
}
