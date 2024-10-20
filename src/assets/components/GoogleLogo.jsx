import styled from "styled-components";
import gLogo from "../images/google.png";
const Wrapper = styled.div`
  width: 320px;

  .gLogo-wrapper {
    display: flex;
    min-width: 320px;
    min-height: 44px;
    border: 1px solid gray;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
  }
  .or {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
  }
  .or span {
    width: 40%;
    height: 1px;

    border-bottom: 1px solid black;
  }
`;

const GoogleLogo = () => {
  return (
    <Wrapper>
      <div className="gLogo-wrapper">
        <img src={gLogo} alt="google logo" />
        <p>Continue with Google</p>
      </div>
      <div className="or">
        <span></span> OR <span></span>
      </div>
    </Wrapper>
  );
};

export default GoogleLogo;
