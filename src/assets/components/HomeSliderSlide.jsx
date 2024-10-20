import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 380px;
  cursor: pointer;
  img {
    width: 95%;
    height: 240px;
    border-radius: 10px;
  }
  p {
    background-color: #00a7e7;
    color: white;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    height: auto;
    width: 30%;
    font-family: "pro-display", "sans-serif";
  }
  h3 {
    font-weight: 100;
  }
`;
const HomeSliderSlide = ({ image }) => {
  return (
    <Wrapper>
      <img src={image} alt="dog image" />
      <p>Pet knowledge</p>
      <h2>What is a Pomeranian? How to Identify Pomeranian Dogs</h2>
      <h3>
        The Pomeranian, also known as the Pomeranian (Pom dog), is always in the
        top of the cutest pets. Not only that, the small, lovely, smart,
        friendly, and skillful circus dog breed.
      </h3>
    </Wrapper>
  );
};

export default HomeSliderSlide;
