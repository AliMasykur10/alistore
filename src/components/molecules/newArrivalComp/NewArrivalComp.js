import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class NewArrivalComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("https://fakestoreapi.com/products?sort=desc&limit=5")
      .then((res) => {
        // console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch();
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };

    const { data } = this.state;
    return (
      <div className=" sm:w-2/4 bg-white">
        <Slider {...settings}>
          {data.map((items, index) => (
            <div key={index} className="">
              <Link to={`/product/${items.id}`}>
                <img src={items.image} alt="" className=" h-32 sm:h-52 bg-white p-6" />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
