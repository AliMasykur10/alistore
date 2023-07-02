import React, { useEffect, useState } from "react";
import Card from "../../molecules/card/Card";
import axios from "axios";

export default function Product({ title, categori }) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categori}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch();
  }, []);

  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold mb-3">{title}</h1>
      <div className="sm:grid grid-cols-4 gap-4 overflow-x-scroll sm:overflow-visible">
        {data.map((items, index) => (
          <Card key={index} data={items} />
        ))}
      </div>
    </div>
  );
}
