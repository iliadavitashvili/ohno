import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";
import facebookLogo from "../images/socIcons/facebook.png";
import twitterLogo from "../images/socIcons/twitter.png";
import instagramLogo from "../images/socIcons/instagram.png";
import youtubeLogo from "../images/socIcons/youtube.png";
import logo from "../images/headerImages/Group.png";
import { NavLink, useNavigate } from "react-router-dom";
const Wrapper = styled.footer`
  width: 100vw;
  height: 440px;
  background-color: #fceed5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .subscribe {
    padding: 0 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80vw;
    background-color: #003459;
    border-radius: 15px;
    height: 30%;
  }
  .subscribe h2 {
    font-size: 24px;
    color: white;
  }
  .footer-nav {
    width: 80vw;
    height: 20%;
  }
  .copy {
    border-top: 1px solid gray;
    padding-top: 50px;
    padding-bottom: 10px;
    width: 80vw;
    height: 20%;
  }
  .footer-form {
    display: flex;
    border-radius: 10px;
    padding: 0 10px;
    height: 50%;
    width: 70%;
    background-color: white;
    align-items: center;
    justify-content: space-evenly;
  }
  .footer-form input {
    width: 60%;
    height: 70%;
    border-radius: 10px;
    border: 1px solid gray;
  }
  .footer-submit {
    width: 25%;
    border: none;
    background-color: #003459;
    color: white;
    height: 70%;
    border-radius: 10px;
  }
  .footer-nav {
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
  }
  .footer-nav nav {
    width: 40%;
    display: flex;
    justify-content: space-around;
  }
  .footer-nav nav ul {
    padding-left: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .footer-nav ul {
    display: flex;
    justify-content: space-around;
    padding-left: 0;
    align-items: center;
    text-align: center;
    width: 40%;
  }
  #logo-container-nav {
    display: flex;
    cursor: pointer;

    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .copy {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .copy p {
    font-size: 14px;
    color: gray;
  }
  .copy span {
    color: #003459;
    font-size: 14px;
    font-weight: bold;
  }
  .terms {
    display: flex;
  }
  .terms p {
    padding: 0 20px;
  }
  @media (max-width: 1000px) {
    padding: 20px 0;
    height: auto;
    .copy {
      flex-direction: column;
      height: auto;
    }
    #logo-container-nav {
      order: -2;
      cursor: pointer;
    }
    .terms {
      order: -1;
    }
    .subscribe {
      height: 244px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ::placeholder {
        color: gray;
        padding-left: 15px;
      }
    }
    .footer-form {
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
    }
    .footer-form input {
      width: calc(100% - 10px);
      height: 40%;
      padding: 0;
      padding-left: 10px;
    }
    .footer-submit {
      width: 100%;
      height: 40%;
      padding: 0;
    }
    .footer-nav {
      height: unset;
      flex-direction: column;
      align-items: center;
    }
    .footer-nav nav {
      width: 100%;
      justify-content: space-evenly;
    }
    .footer-nav > ul {
      width: 60%;
    }
  }
`;

const Footer = () => {
  const navigate = useNavigate();
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  const [email, setEmail] = useState("");
  function handleChange(e) {
    // console.log("22");

    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("11");
    if (validateEmail(email) == true) {
      setEmail("");
      toast.success(`${email} subscribed!`, { closeOnClick: true });
    } else {
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <div className="subscribe">
        <h2>Register now so you don't miss our programs</h2>
        <form className="footer-form">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="Enter your email"
          />
          {!validateEmail(email) && email != "" && (
            <span style={{ color: "red" }}>Enter valid Email</span>
          )}
          <button
            type="button"
            className="footer-submit"
            onClick={handleSubmit}
          >
            Subscribe Now
          </button>
        </form>
      </div>
      <div className="footer-nav">
        <nav>
          <ul>
            <NavLink to={"/"} activeClassName="active">
              Home
            </NavLink>
            {/* <li>Home</li> */}

            <li>Category</li>
            <li>About</li>
            {/* <li>Contact</li> */}
            <NavLink to={"/contact"} activeClassName="active">
              Contact
            </NavLink>
          </ul>
        </nav>
        <ul>
          <li>
            <img src={facebookLogo} alt="fb logo" />
          </li>
          <li>
            <img src={twitterLogo} alt="x logo" />
          </li>
          <li>
            <img src={instagramLogo} alt="insta logo" />
          </li>
          <li>
            <img src={youtubeLogo} alt="youtube logo" />
          </li>
        </ul>
      </div>
      <div className="copy">
        <p>© 2022 Monito. All rights reserved.</p>
        <div id="logo-container-nav" onClick={() => navigate("/")}>
          <img src={logo} />
          <span className="header-logo-under-text">Pets for Best</span>
        </div>
        <div className="terms">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
