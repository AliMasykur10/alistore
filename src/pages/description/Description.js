import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Description() {
  const [data, setdata] = useState([]);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setdata(res.data);
      })
      .catch();
  }, []);

  console.log(data);
  return (
    <div className="sm:max-w-7xl mx-auto my-6 flex">
      <div className="basis-1/3">
        <img src={data.image} alt="" />
      </div>

      <div className="basis-2/3">
        <h1 className="">{data.title}</h1>
        <p>{data.description}</p>
        <p>{data.category}</p>
        <p>${data.price}</p>
      </div>
    </div>
  );
}
