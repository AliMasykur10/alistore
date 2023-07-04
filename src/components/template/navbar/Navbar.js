import React from "react";
import logo from "./../../../assets/bx-cart-alt.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <nav className="flex justify-between sm:max-w-7xl mx-auto items-center p-4">
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className=" text-fontColor text-xl sm:text-3xl font-semibold">AliStore</span>
          </div>
        </Link>
        <div className="cursor-pointer flex ">
          <Link to="/cart">
            <box-icon type="solid" name="cart" size="lg" />
          </Link>
          <div>
            <p className="text-lg px-2 py-1 rounded  bg-fontColor text-white ">{cartItems.length}</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
