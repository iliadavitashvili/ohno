import React from "react";
import styled from "styled-components";
import rectWhite from "../images/homeSixthSectionImages/rectWhite.png";
import rectTrans from "../images/homeSixthSectionImages/rectTransparent.png";
import handShakeImage from "../images/homeSixthSectionImages/handShake.png";
import paw from "../images/homeSixthSectionImages/paw.png";
import CustomButton from "./CustomButton";
const Wrapper = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-image: url(${rectWhite}), url(${rectTrans});
  background-repeat: no-repeat;
  background-position: left, right bottom;

  margin: 20px auto;
  box-sizing: border-box;
  padding: 0 20px;
  max-width: 1180px;
  border-radius: 15px;
  background-color: #ffb775;
  overflow: hidden;

  margin-top: 20px;
  .blue-rec {
    float: right;
    border-radius: 10px;
  }
  .owner {
    float: left;
  }
  h2,
  h1,
  p {
    color: #003459;
    margin: 10px;
  }
  p {
    width: 300px;
    font-weight: bold;
  }
  h1 {
    margin-bottom: 0;
    font-size: 56px;
  }
  h2 {
    font-size: 36px;
  }
  .text-wrapper {
    width: 100vw;
    padding: 0;
    text-align: left;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  .buttons-wrapper {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const HomeSixthSection = () => {
  return (
    <Wrapper>
      <img src={handShakeImage} alt="dog and its owner" className="owner" />
      {/* <img src={recYellow} alt="dog and its owner" className="blue-rec" /> */}
      <div className="text-wrapper">
        <h1>
          Adoption <img src={paw} alt="paw iamge" />
        </h1>
        <h2>We need help. so do they.</h2>
        <p>
          Adopt a pet and give it a home, it will be love you back
          unconditionally.
        </p>
        <div className="buttons-wrapper">
          <CustomButton text="Explore Now" id="secButton" />
          <CustomButton icon={"play"} text="View Intro" transparent />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeSixthSection;
