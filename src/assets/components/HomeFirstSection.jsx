import styled from "styled-components";
import dog from "../images/homeSectionImages/dog.png";
import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import rec1 from "../images/homeFirstSectionImages/rec1.png";
import rec2 from "../images/homeFirstSectionImages/rec2.png";
import rec3 from "../images/homeFirstSectionImages/rec3.png";
import rec4 from "../images/homeFirstSectionImages/rec4.png";
import rec5 from "../images/homeFirstSectionImages/rec5.png";
import rec6 from "../images/homeFirstSectionImages/rec6.png";
import rec7 from "../images/homeFirstSectionImages/rec7.png";
import rec8 from "../images/homeFirstSectionImages/rec8.png";
const Wrapper = styled.section`
  max-width: 100vw;

  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  background-color: #fceed5;
  background-image: url(${rec2}), url(${rec1}), url(${rec3}), url(${rec4}),
    url(${rec6}), url(${rec5}), url(${rec7}), url(${rec8});
  background-position: 85% bottom, 70% 100%, 3% 3%, 46% 12%, 45% 20%, 45% 19%,
    bottom left;
  background-repeat: no-repeat;
  .info-container {
    width: 33%;
    display: flex;
    flex-direction: column;
    padding: 0 2vw;

    justify-content: flex-start;
  }
  h1 {
    color: #002a48;
    font-size: 60px;
    white-space: nowrap;
    margin-top: 20px;
    margin-bottom: 0;
  }
  h2 {
    color: #002a48;
    font-size: 48px;
    margin-top: 20px;
    margin-bottom: 0;
  }
  p {
    color: #242b33;
    margin-bottom: 50px;
  }
  .buttons-wrapper {
    display: flex;
  }
  .buttons-wrapper button {
    margin-right: 10px;
  }
  .image-container {
    max-width: 900;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
  }
  @media (max-width: 992px) {
    background-image: url(${rec2}), url(${rec1}), url(${rec3}), url(${rec4}),
      url(${rec6}), url(${rec5}), url(${rec7}), url(${rec8});
    background-position: 85% 390%, 70% 230%, 3% 3%, 46% 12%, 45% 20%, 45% 19%,
      bottom left;
    flex-direction: column;

    padding: 0;
    height: unset;
    justify-content: unset;
    align-items: unset;
    white-space: unset;
    .info-container {
      width: unset;
    }
    h1 {
      white-space: unset;
      width: auto;
      font-size: 46px;
      white-space: unset;
    }
    h2 {
      font-size: 28px;
    }
    .img-container {
      width: 100vw;

      text-align: center;
    }
    .img-container img {
      object-fit: fill;

      margin-top: 20px;
      width: 100%;
    }
  }
`;
const HomeFirstSection = () => {
  const { lang, setLang } = useHomeLayoutContext();

  const isLanguageEng = lang === "ENG";
  return (
    <Wrapper>
      <div className="info-container">
        <h1>{isLanguageEng ? "One More Friend" : "კიდევ ერთი მეგობარი"}</h1>
        <h2>{isLanguageEng ? "Thousands more fun!" : "კიდევ ერთი მეგობარი"}</h2>
        <p>
          {isLanguageEng
            ? `Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!`
            : `გყავდეს შინაური ცხოველი მიშნავს მეტ გართობას და მეტ მეგობარს. ჩვენ გვყავს 200 ზე მეტი შინაური ცხოველი`}
        </p>
        <div className="buttons-wrapper">
          <CustomButton transparent>
            {isLanguageEng ? "View Intro" : "იხილეთ მეტი"}
          </CustomButton>
          <CustomButton icon={"play"}>
            {isLanguageEng ? "Explore Now" : "აღმოაჩინეთ"}
          </CustomButton>
        </div>
      </div>
      <div className="img-container">
        <img src={dog} alt="woman holding a dog" />
      </div>
    </Wrapper>
  );
};

export default HomeFirstSection;
