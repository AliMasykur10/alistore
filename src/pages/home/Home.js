import React from "react";
import Hero from "../../components/organisms/hero/Hero";
import Product from "../../components/organisms/product/Product";

export default function Home() {
  return (
    <div className="home w-full sm:max-w-7xl sm:mx-auto p-2 ">
      <Hero />
      <Product title="Men's Clothing" categori="men's clothing" />
      <Product title="Women's Clothing" categori="women's clothing" />
      <Product title="Jewelery" categori="jewelery" />
      <Product title="Electronics" categori="electronics" />
    </div>
  );
}
