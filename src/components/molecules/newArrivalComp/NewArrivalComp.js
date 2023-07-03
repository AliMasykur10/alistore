import axios from "axios";
import React, { Component } from "react";
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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {data.map((items, index) => (
            <div key={index}>
              <img src={items.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}