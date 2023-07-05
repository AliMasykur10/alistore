import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import HeroComp from "./../../molecules/heroComp/HeroComp";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch();
  };
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    };
    const { data } = this.state;
    return (
      <div className="bg-white mb-10 shadow-lg">
        <Slider {...settings}>
          {data.map((items, index) => (
            <HeroComp data={items} key={index} />
          ))}
        </Slider>
      </div>
    );
  }
}
