import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import brandIcon1 from "../images/homeFifthSectionIcons/brandIcons/frame1.png";
import brandIcon2 from "../images/homeFifthSectionIcons/brandIcons/frame2.png";
import brandIcon3 from "../images/homeFifthSectionIcons/brandIcons/frame3.png";
import brandIcon4 from "../images/homeFifthSectionIcons/brandIcons/frame4.png";
import brandIcon5 from "../images/homeFifthSectionIcons/brandIcons/frame5.png";
import brandIcon6 from "../images/homeFifthSectionIcons/brandIcons/frame6.png";
import brandIcon7 from "../images/homeFifthSectionIcons/brandIcons/frame7.png";
const Wrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  .info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
  }
  .info-wrapper p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .info-wrapper p span {
    color: #003459;
    font-size: 24px;
    font-family: sans-serif;
    font-weight: bold;
    margin-left: 10px;
  }
  .icons-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const HomeFifthSection = () => {
  return (
    <Wrapper>
      <div className="info-wrapper">
        <div>
          <p>
            Proud to be part of <span> Pet Sellers</span>
          </p>
        </div>
        <CustomButton
          text={"View all our sellers"}
          icon={"arrow"}
          transparent
        />
      </div>
      <div className="icons-wrapper">
        <img src={brandIcon1} alt="brand icon" />
        <img src={brandIcon2} alt="brand icon" />
        <img src={brandIcon3} alt="brand icon" />
        <img src={brandIcon4} alt="brand icon" />
        <img src={brandIcon5} alt="brand icon" />
        <img src={brandIcon6} alt="brand icon" />
        <img src={brandIcon7} alt="brand icon" />
      </div>
    </Wrapper>
  );
};

export default HomeFifthSection;
