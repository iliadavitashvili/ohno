import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Slider from "react-slick";
import dogs from "../utils/dogs";
import HomeSliderSlide from "./HomeSliderSlide";
const Wrapper = styled.section`
  position: relative;
  max-width: 1400px;
  padding-left: 100px;
  margin: 150px auto;
  align-items: center;

  .c-arrow {
    position: absolute;
    width: 76px;
    height: 44px;
    border: 1px solid #003459;
    border-radius: 20px;
    color: #003459;
    left: 90%;
    bottom: 520px;
  }
  .c-arrow:nth-child(1) {
    margin-left: -100px;
  }
  .info-wrapper {
    position: absolute;
    bottom: 520px;
  }
  .info-wrapper h2,
  .info-wrapper p {
    margin: 0;
    font-family: sans-serif;
  }
  .info-wrapper h2 {
    font-size: 24px;
    color: #003459;
  }
  @media (max-width: 1000px) {
    padding-left: 0;
    margin-left: 15px;
    max-width: 100vw;
    .c-arrow {
      display: none;
    }
  }
`;
function CustomArrow({ arrow = "#", onClick, classNa }) {
  return (
    <button className={classNa} onClick={onClick}>
      {arrow}
    </button>
  );
}

const HomeSeventhSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <CustomArrow arrow=">" classNa="c-arrow" />,
    prevArrow: <CustomArrow arrow="<" classNa="c-arrow" />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Wrapper className="slider-container">
      <div className="info-wrapper">
        <p>You already know ?</p>
        <h2>Useful pet knowledge</h2>
      </div>
      <Slider {...settings}>
        {dogs.map((dog, index) => {
          return <HomeSliderSlide key={index} image={dog.image} />;
        })}
      </Slider>
    </Wrapper>
  );
};

export default HomeSeventhSection;
