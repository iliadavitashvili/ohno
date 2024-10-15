import styled from "styled-components";
import { useState } from "react";
import profileLogo from "../images/userProfile/user.png";
import logoutLogo from "../images/userProfile/log-out.png";
import { useHomeLayoutContext } from "../pages/HomeLayout";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  height: 170px;
  width: 272px;
  background-color: white;
  border-radius: 20px;
  margin-top: 250px;
  margin-left: -80px;
  z-index: 0;
  position: absolute;
  box-shadow: 1px 1px 3px 1px black;
  p {
    color: #003459;
    font-weight: bold;
    text-shadow: 1px 1px 1px gray;
    margin-left: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  div span {
    display: flex;
    margin: 10px 0;
  }
  div img {
    margin: 0 10px;
  }
  span:hover {
    cursor: pointer;
  }
`;

const UserProfile = () => {
  const { user, setShowUserProfile } = useHomeLayoutContext();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <p>{user.name}</p>
      <hr />
      <div>
        <span>
          <img src={profileLogo} />
          profile
        </span>
        <span
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("lang");
            window.dispatchEvent(new Event("userUpdated"));
            setShowUserProfile((prev) => !prev);
            toast.success("Logged out");
            navigate("/");
          }}
        >
          <img src={logoutLogo} />
          log out
        </span>
      </div>
    </Wrapper>
  );
};

export default UserProfile;
