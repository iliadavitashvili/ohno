import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
const Wrapper = styled.section`
  max-width: 1240px;
  margin: 20px auto;

  > h2 {
    font-size: 48px;
    color: #003459;
    font-family: "pro-display", "sans-serif";
  }
  .counter-wrapper {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(4, 1fr);
  }
  .counter-element {
    background-color: #003459;
    width: 260px;
    height: 200px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-size: 64px;
    color: white;
    margin: 0;
  }
  p {
    color: white;
  }
  @media (max-width: 1000px) {
    .counter-wrapper {
      grid-template-columns: repeat(2, 1fr);
      padding: 5px;
    }
    .counter-element {
      background-color: #003459;
      width: 180px;
      height: 150px;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h2 {
      margin: 0;
    }
  }
`;
const BigSummerEvent = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date("November 1, 2024 00:00:00");
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper>
      <h2>Big Summer Event</h2>

      <div className="counter-wrapper">
        <div className="counter-element">
          <h3>{timeLeft.days}</h3>
          <p>DAYS</p>
        </div>
        <div className="counter-element">
          <h3>{timeLeft.hours}</h3>
          <p>HOURS</p>
        </div>
        <div className="counter-element">
          <h3>{timeLeft.minutes}</h3>
          <p>MINUTES</p>
        </div>
        <div className="counter-element">
          <h3>{timeLeft.seconds}</h3>
          <p>SECONDS</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSummerEvent;
