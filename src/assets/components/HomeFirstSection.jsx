import styled from "styled-components";
import dog from "../images/homeSectionImages/dog.png";
import CustomButton from "./CustomButton";
import { useEffect, useState } from "react";
import { useHomeLayoutContext } from "../pages/HomeLayout";
const Wrapper = styled.section`
  padding: 0 8%;
  width: 1440px;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-evenly;
  background-color: #fceed5;
  .info-container {
    width: 33%;
    display: flex;
    flex-direction: column;
    padding: 0 5vw;
    /* margin: 0; */
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
    flex-direction: column;
    width: 100vw;
    padding: 0;
    height: calc(100vh);
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
      /* display: flex;
      justify-content: center;
      align-items: center; */
      width: 100vw;
      /* padding-left: 10px; */
      text-align: center;
      /* height: 20px; */
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
  //   const [language, setLanguage] = useState("");
  //   useEffect(() => {
  //     setLanguage(JSON.parse(localStorage.getItem("lang")));
  //   }, [lang]);
  //   console.log(lang, "here homef");

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
        <img
          src={dog}
          alt="woman holding a dog"
          //   style={{ maxWidth: "900px" }}
        />
      </div>
    </Wrapper>
  );
};

export default HomeFirstSection;
