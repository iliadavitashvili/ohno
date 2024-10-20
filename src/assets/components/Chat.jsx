import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import chatDog from "../images/chatDog.png";
import {
  getRandomFAQ,
  getRandomPricing,
  getRandomNews,
} from "../utils/chat.js";
import ChatMessage from "./ChatMessage.jsx";
const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 414px;
  height: 100vh;

  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
  .chat-container {
    width: 100%;
    height: 38%;
    background-color: #f8f9fa;
    overflow-y: auto;
    padding-bottom: 20px;
  }
  .generate-text h3 {
    font-size: 9.92px;
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
  }
  .generate-text {
    padding: 0 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    column-gap: 10px;
  }
  input {
    background-color: #f8f9fa;
    border: none;
    padding: 20px;
    border-radius: 10px;
    grid-column: 1 / -1;
  }
  .close {
    position: absolute;
    font-size: 39px;
    font-family: sans-serif;
    top: 0;
    left: 10px;
    color: white;
    text-shadow: 1px 1px 1px silver;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    width: 100vw;
    height: 101vh;
  }
`;

const Chat = ({ setIsChatOpen }) => {
  const isFirstLoad = useRef(true);
  const [chat, setChat] = useState([]);
  const [text, setText] = useState("");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
    } else {
      setChat((prev) => [
        ...prev,
        { author: "user", news: text, time: `${hours}:${minutes}` },
      ]);
    }
  }, [text]);

  //   console.log(chat);
  function handleKeyDown(e) {
    if (e.key === "Enter" && e.target.id === "texta" && e.target.value != "") {
      setText(e.target.value);
      e.target.value = "";
    }
  }
  function handleClick(e) {
    const target = e.target.id;
    if (target === "news") {
      setChat((prev) => [
        ...prev,
        { author: "dog", news: getRandomNews(), time: `${hours}:${minutes}` },
      ]);
    }
    if (target === "pricing") {
      setChat((prev) => [
        ...prev,
        {
          author: "dog",
          news: getRandomPricing(),
          time: `${hours}:${minutes}`,
        },
      ]);
    }
    if (target === "faq") {
      setChat((prev) => [
        ...prev,
        { author: "dog", news: getRandomFAQ(), time: `${hours}:${minutes}` },
      ]);
    }
  }
  return (
    <Wrapper>
      <h1 onClick={() => setIsChatOpen((prev) => !prev)} className="close">
        X
      </h1>
      <img src={chatDog} alt="dog icon" />

      <div className="chat-container">
        {chat.map((item, index) => {
          return <ChatMessage key={index} {...item} />;
        })}
      </div>
      <div className="inputs-container">
        <div className="generate-text">
          <h3 id="news" onClick={handleClick}>
            🤔 What is WappGPT?
          </h3>
          <h3 id="pricing" onClick={handleClick}>
            💰 Pricing
          </h3>
          <h3 id="faq" onClick={handleClick}>
            🙋‍♂️ FAQs
          </h3>
          <input
            type="text"
            id="texta"
            placeholder="Type your message here..."
            onKeyDown={handleKeyDown}
          ></input>
        </div>
      </div>
    </Wrapper>
  );
};

export default Chat;
