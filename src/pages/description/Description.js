import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../services/reducer/carrtSlice/CartSlice";

export default function Description() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const params = useParams();
  const { id } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setdata(res.data);
        setloading(false);
      })
      .catch();
  }, [id]);

  if (loading) {
    return (
      <div className="sm:max-w-7xl mt-20  mx-auto flex gap-3 justify-center items-center ">
        <box-icon name="loader-alt" animation="spin" size="lg"></box-icon>
        <h1 className="text-2xl font-bold">loading...</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };
  return (
    <div className="sm:max-w-7xl mx-auto my-6 sm:flex gap-6 p-3 sm:p-0">
      <div className="basis-1/3 mb-4 sm:mb-0 ">
        <img src={data.image} alt="" />
      </div>

      <div className="basis-2/3">
        <h1 className=" text-xl sm:text-3xl font-bold mb-2 w-3/4 ">{data.title}</h1>
        <p className=" mb-5 ">Category : {data.category}</p>
        <p className="text-xl font-bold">${data.price}</p>

        <div className="mt-4">
          <button className="text-xl font-bold px-4 py-2 outline outline-1 m-3 hover:bg-fontColor hover:text-white ">Buy</button>
          <button className="text-xl font-bold px-4 py-2 outline outline-1 m-3 hover:bg-fontColor hover:text-white" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>

        <div className="mt-10 ">
          <h2 className=" text-xl sm:text-2xl font-bold mb-2">Description</h2>
          <p className=" sm:w-3/4 text sm:text-xl tracking-wider ">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
