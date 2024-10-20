import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import dogImage1 from "../images/currentDogSliderImages/image1.png";
import dogImage2 from "../images/currentDogSliderImages/image2.png";
import dogImage3 from "../images/currentDogSliderImages/image3.png";
import dogImage4 from "../images/currentDogSliderImages/image4.png";
const images = [dogImage1, dogImage2, dogImage3, dogImage4];
import styled from "styled-components";
const Wrapper = styled.section`
  max-width: 1240px;
  margin: 40px auto;

  align-items: center;
  > h2 {
    margin-left: 20px;
  }
  img {
    overflow: hidden;
    border-radius: 20px;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    img {
    }
  }
`;
const CurrentDogSlider = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          speed: 2000,
          autoplaySpeed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <Wrapper>
      <h2>Our lovely customer</h2>
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt="happy customer" />
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};

export default CurrentDogSlider;
