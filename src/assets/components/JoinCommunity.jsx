import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div``;
const JoinCommunity = ({ langEng }) => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ userSelect: "none", cursor: "pointer" }}>
        {langEng ? "join the community" : "შემოგვიერთდი"}
      </div>
    </>
  );
};

export default JoinCommunity;
