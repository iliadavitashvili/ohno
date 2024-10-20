import React, { useCallback } from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import getRandomDogs from "../utils/randomDogs";
import DogWrapper from "./DogWrapper";
import arrowIcon from "../images/buttonIcons/arrow.png";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.section`
  max-width: 100vw;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  .dogs-grid {
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 284px);
    grid-template-rows: minmax(100px, auto);
    justify-content: center;
  }
  .info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
  }

  .info-wrapper h2 {
    color: #003459;
    font-size: 20px;
    font-weight: bolder;
    font-family: "pro-display", "sans-serif";
  }
  .info-wrapper p {
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    padding: unset;
    .dogs-grid {
      width: 100vw;
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(2, 185px);
      grid-template-rows: minmax(100px, auto);
      justify-content: space-around;
      justify-items: center;
    }
    .bigbtn {
      margin: 20px;
      color: #003459;
      font-size: 14px;
      font-weight: bolder;
      padding: 10px;
      height: 48px;
      width: 80vw;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info-wrapper {
      margin: unset;
    }
  }
`;
const HomeSecondSection = () => {
  const navigate = useNavigate();
  const dogLink = useCallback((id) => {
    navigate(`/${id}`);
  }, []);
  return (
    <Wrapper>
      <div className="info-wrapper">
        <div>
          <p>Whats new?</p>
          <h2>Take a look at some of our pets</h2>
        </div>
        {window.innerWidth > "1000" && (
          <CustomButton
            text={"View more"}
            icon={"arrow"}
            transparent
            onClick={() => navigate("/category/1")}
          />
        )}
      </div>
      <div className="dogs-grid">
        {getRandomDogs(8).map((dog, index) => {
          return (
            <DogWrapper
              dog={dog}
              key={index}
              id={dog.sku}
              onClick={() => {
                dogLink(dog.sku);
                window.scrollTo(0, 0);
              }}
            />
          );
        })}
      </div>
      {window.innerWidth < "1000" && (
        <button
          onClick={() => {
            navigate("/category/1");
            window.scrollTo(0, 0);
          }}
          className="bigbtn"
        >
          View More
          <img src={arrowIcon} />
        </button>
      )}
    </Wrapper>
  );
};

export default HomeSecondSection;
