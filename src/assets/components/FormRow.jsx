import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 15px 0;
  flex-direction: column;
  align-items: flex-start;
  label,
  input {
    font-weight: bold;
    width: 100%;
  }
  input {
    height: 45px;
  }
  label {
    color: #003459;
    font-size: 14px;
    height: 25px;
    width: 36px;
    white-space: nowrap;
  }
`;
const FormRow = ({ type, text, name, invalid, ...rest }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{text || name}</label>
      <input id={name} name={name} type={type} {...rest} />
      {invalid && <p style={{ color: "red" }}>{invalid}</p>}
    </Wrapper>
  );
};

export default FormRow;
