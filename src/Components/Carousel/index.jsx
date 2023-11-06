import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

const _url = "http://localhost:3000/brands";

const CarouselComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 576 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 2,
    },
  };
  const [carouselProducts, setCarouselProducts] = useState([]);

  useEffect(() => {
    axios.get(_url).then(({ data }) => {
      setCarouselProducts(data);
    });
  }, []);

  return (
    <div className="container">
      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={true}
        className="carousel py-5 my-5"
      >
        {carouselProducts.map(({ id, src }) => {
          return (
            <div key={id} className="carouselImageBox">
              <img src={src} className="carouselImage" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
