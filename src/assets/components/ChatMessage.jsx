import React from "react";
import styled from "styled-components";
import dogIcon from "../images/chatDog.png";
const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.$author === "dog" ? "#003459" : "#F7DBA7"};
  color: ${(props) => (props.$author === "dog" ? "#ffffff" : "#444444")};
  margin: ${(props) => (props.$author === "dog" ? "25px 15px" : "15px")};
  padding: 0 20px;
  align-self: flex-end;
  border-radius: 10px;
  width: 65%;
  float: ${(props) => (props.$author === "dog" ? "left" : "right")};
  .time {
    margin: 0;
    position: absolute;
    font-size: 10px;
    margin-top: ${(props) => (props.$author === "dog" ? "0" : "5px")};
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${(props) => (props.$author === "dog" ? "-30px" : "0")};
  }
  .time div {
    width: 40px;
    height: 40px;
    background-color: #003459;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
  }
  .time img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
const ChatMessage = ({ news, time, author }) => {
  return (
    <Wrapper $author={author}>
      <p>{news}</p>
      <span className="time">
        {author === "dog" && (
          <div>
            <img src={dogIcon} alt="dog image" />
          </div>
        )}{" "}
        {time}
      </span>
    </Wrapper>
  );
};

export default ChatMessage;
