import React, { useEffect, useState } from "react";
import Card from "../../molecules/card/Card";
import axios from "axios";

export default function Product({ title }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        console.log(res);
      })
      .catch();
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div>
        <Card />
        <Card />
      </div>
    </div>
  );
}
