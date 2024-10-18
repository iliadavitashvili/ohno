import React from "react";
import styled from "styled-components";
import recBlue from "../images/homeThirdSection/recBlue.png";
import recYellow from "../images/homeThirdSection/recYellow.png";
import owner from "../images/homeThirdSection/image.png";
import CustomButton from "./CustomButton";
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  background-image: url(${recYellow});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 60%;
  margin: 0 auto;
  max-width: 1180px;
  border-radius: 15px;
  background-color: #003459;
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
    margin: 0;
  }
  h1 {
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
  }
  .buttons-wrapper {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1000px) {
    width: 100vw;
    flex-direction: column-reverse;
    background-image: url(${recYellow});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 136%;
    h2,
    h1,
    p {
      color: #003459;
      margin: unset;
      text-align: center;
      margin-top: 10px;
    }
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 24px;
    }
    .buttons-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
  }
`;
const HomeThirdSection = () => {
  return (
    <Wrapper>
      <img src={owner} alt="dog and its owner" className="owner" />
      {/* <img src={recYellow} alt="dog and its owner" className="blue-rec" /> */}
      <div className="text-wrapper">
        <h1>One more friend</h1>
        <h2>Thousands more fun!</h2>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="buttons-wrapper">
          <CustomButton icon={"play"} text="View Intro" transparent />
          <CustomButton text="Explore Now" id="secButton" />
        </div>
      </div>
    </Wrapper>
  );
};

export default HomeThirdSection;
