import React from "react";

import styled from "styled-components";
import dogs from "../utils/dogs";
import CustomButton from "../components/CustomButton";
import guaranteeRed from "../images/guaranteeIcons/guaranteeRed.png";
import guaranteeYellow from "../images/guaranteeIcons/guaranteeYellow.png";
import fbIcon from "../images/socIcons/facebook.png";
import instIcon from "../images/socIcons/instagram.png";
import twiterIcon from "../images/socIcons/twitter.png";
import youTubeIcon from "../images/socIcons/youtube.png";
import shareIcon from "../images/socIcons/shareIcon.png";

const Wrapper = styled.div`
  display: flex;
  /* max-width: 1440px; */
  flex-direction: column;
  box-sizing: border-box;
  max-width: 100vw;
  border: 1px solid silver;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
  justify-content: space-around;
  .dog-name-buttons {
    display: flex;
  }

  .guarantee p {
    display: flex;
    gap: 2px;
    flex-direction: column;
  }
  .guarantee p span {
    background-color: #fceed5;
    border-radius: 10px;
    color: #002a48;
    font-weight: bold;
    font-family: sans-serif;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .share-container span {
    display: flex;
    font-size: bold;
    margin-top: 10px;
    color: rgb(0, 52, 89);
    justify-content: space-between;
    align-items: center;
  }
  .current-dog-image {
    border-radius: 15px;
  }
  .share-container {
    img {
      cursor: pointer;
      padding: 0 15px;
    }
    img:hover {
      scale: 1.2;
    }
  }
  .dog-details {
    color: #667479;
  }
  .dog-detail {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
  }
  .dog-detail-last {
    /* display: flex; */
    /* justify-content: space-between; */
    /* text-align: left; */
  }
  @media (min-width: 1000px) {
    display: none;
  }
  h1,
  h2 {
    color: rgb(0, 52, 89);
    font-weight: bolder;
    font-family: sans-serif;
  }
  .guarantee {
    color: rgb(0, 52, 89);
    font-weight: normal;
  }
`;
const DesktopDogInfo = ({ skuId }) => {
  const currentDog = dogs.filter((dog) => skuId == dog.sku)[0];
  // console.log(currentDog);
  return (
    <Wrapper>
      <img
        src={currentDog.image}
        className="current-dog-image"
        alt="current-dog-image"
      />
      <div className="dog-name-container">
        <h1>{currentDog.breed}</h1>
        <h2>{currentDog.price}.00 GEL</h2>
        <div className="dog-name-buttons">
          <CustomButton text={"Contact Us"} />
          <CustomButton
            text={"Chat with Monito"}
            icon={"message"}
            transparent
          />
        </div>
      </div>
      <div className="share-container">
        <span>
          <span>Information</span>
          <span>
            <img src={shareIcon} alt="share icon" />
            Share
          </span>
        </span>
      </div>

      <div className="dog-details">
        <p className="dog-detail">
          <span>SKU</span> :# {currentDog.sku}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Gender</span> : {currentDog.gender}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Age</span> : {currentDog.age} year
        </p>
        <hr />
        <p className="dog-detail">
          <span>Size</span> : {currentDog.size}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Color</span> : {currentDog.color}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Vaccinated</span> : {currentDog.vaccinated ? "Yes" : "No"}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Dewormed</span> : {currentDog.dewormed ? "Yes" : "No"}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Cert</span> : {currentDog.cert ? "Yes" : "No"}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Microchip</span> : {currentDog.microchip ? "Yes" : "No"}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Location</span> : {currentDog.location}
        </p>
        <hr />
        <p className="dog-detail">
          <span>Published Date</span> : {currentDog.publishedDate}
        </p>
        <hr />
        <p className="dog-detail dog-detail-last">
          <span>Additional information</span>
          :loyal and friendly
        </p>
        <hr />
      </div>
      <div className="guarantee">
        <p>
          <span>
            <img src={guaranteeRed} /> 100% health guarantee for pets
          </span>
          <span>
            <img src={guaranteeYellow} />
            100% guarantee of pet identification
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

export default DesktopDogInfo;
