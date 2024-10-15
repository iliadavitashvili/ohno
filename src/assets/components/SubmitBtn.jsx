import styled from "styled-components";
const Wrapper = styled.button`
  margin-top: 50px;
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border: none;
  background-color: #003459;
  text-align: center;
  color: #ffffff;
`;

const SubmitBtn = ({ text = "submit", ...rest }) => {
  return (
    <Wrapper type="submit" className="subBtn" {...rest}>
      {text}
    </Wrapper>
  );
};

export default SubmitBtn;
