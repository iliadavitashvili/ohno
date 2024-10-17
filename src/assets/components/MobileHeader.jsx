import styled from "styled-components";
import logo from "../images/headerImages/Group.png";
import JoinCommunity from "./JoinCommunity";
import { useEffect, useState } from "react";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import { useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import hamburger from "../images/hamburger.png";
const Wrapper = styled.header`
  user-select: none;
  width: 100vw;
  nav {
    background-color: #fceed5;
    max-width: 1440px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0 8%;
    align-items: center;
  }
  nav ul {
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
  nav ul li {
    list-style-type: none;
    color: #103559;
    font-weight: bold;
    /* margin-left: 5vw; */
  }
  .header-logo-under-text {
    color: #103559;
    font-size: 0.7rem;
  }
  .header-logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left-hand li {
    color: #003459;
  }
  .join-the-community {
    max-width: 214px;
    height: 44px;
    color: white;
    background-color: #003459;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    border-radius: 20px;
  }
  #user {
    background-color: "red";
    padding: 10px;
    color: #003459;
    font-weight: bolder;
    border-radius: 5px;
    box-shadow: 1px 1px 1px gray;
  }
  @media (min-width: 1000px) {
    display: none;
  }
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
  .menu {
    z-index: 0;
    position: relative;
    left: 10%;
    top: 10%;
    width: 80%;
    height: 40%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
  }

  .menu > ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-items: center;
    height: 100%;
    align-items: center;
  }
`;
const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { lang, setLang, user, setUser, ShowUserProfile, setShowUserProfile } =
    useHomeLayoutContext();
  // const [ShowUserProfile, setShowUserProfile = useState(false);
  const isLanguageEnglish = lang === "ENG";
  // console.log(user, "changeed");

  const languageChange = () => {
    setLang((prev) => (prev === "ENG" ? "GEO" : "ENG"));
  };
  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang));
  }, [lang]);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <nav>
        <div className="header-logo-container" onClick={() => navigate("/")}>
          <img src={logo} />
          <span className="header-logo-under-text">Pets for Best</span>
        </div>

        <img src={hamburger} onClick={() => setShowMenu((prev) => !prev)} />
        {showMenu && (
          <div
            className="backdrop"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <div className="menu" onClick={(e) => e.stopPropagation()}>
              <ul>
                <li
                  onClick={() => {
                    setShowMenu(false);
                    navigate("/");
                  }}
                >
                  {isLanguageEnglish ? "Home" : "მთავარი"}
                </li>
                <li
                  onClick={() => {
                    setShowMenu(false);
                    navigate("/category/1");
                  }}
                >
                  {isLanguageEnglish ? "Category" : "კატეგორია"}
                </li>
                <li
                  onClick={() => {
                    setShowMenu(false);
                    navigate("/contact");
                  }}
                >
                  {isLanguageEnglish ? "Contact" : "კონტაქტი"}
                </li>
                {user?.login ? (
                  <>
                    <li
                      id="user"
                      style={{ backgroundColor: "white" }}
                      onClick={() => {
                        setShowUserProfile((prev) => !prev);
                      }}
                    >
                      {user.name}
                    </li>
                    {ShowUserProfile && (
                      <UserProfile setShowMenu={setShowMenu} />
                    )}
                  </>
                ) : (
                  <li
                    className="join-the-community"
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/register");
                    }}
                  >
                    <JoinCommunity langEng={isLanguageEnglish} />
                  </li>
                )}
                <li onClick={languageChange} style={{ cursor: "pointer" }}>
                  {isLanguageEnglish ? "GEO/ქარ" : "ENG/ინგ"}
                </li>
                <li>
                  <div
                    className="header-logo-container"
                    onClick={() => {
                      setShowMenu(false);
                      navigate("/");
                    }}
                  >
                    <img src={logo} />
                    <span className="header-logo-under-text">
                      Pets for Best
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* <ul className="left-hand">
          <div className="header-logo-container">
            <img src={logo} />
            <span className="header-logo-under-text">Pets for Best</span>
          </div>
          <li onClick={() => navigate("/")}>
            {isLanguageEnglish ? "Home" : "კატეგორია"}
          </li>
          <li>{isLanguageEnglish ? "Category" : "კატეგორია"}</li>
          <li>{isLanguageEnglish ? "Contact" : "კონტაქტი"}</li>
        </ul>
        <ul>
          {user?.login ? (
            <>
              <li
                id="user"
                style={{ backgroundColor: "white" }}
                onClick={() => {
                  setShowUserProfile((prev) => !prev);
                }}
              >
                {user.name}
              </li>
              {ShowUserProfile && <UserProfile />}
            </>
          ) : (
            <li
              className="join-the-community"
              onClick={() => navigate("/register")}
            >
              <JoinCommunity langEng={isLanguageEnglish} />
            </li>
          )}
          <li onClick={languageChange} style={{ cursor: "pointer" }}>
            {isLanguageEnglish ? "GEO/ქარ" : "ENG/ინგ"}
          </li>
        </ul> */}
      </nav>
    </Wrapper>
  );
};

export default MobileHeader;
