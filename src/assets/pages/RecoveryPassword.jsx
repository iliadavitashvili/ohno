import { Form, Link } from "react-router-dom";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";
import { useHomeLayoutContext } from "./HomeLayout";
import { useState } from "react";
import { toast } from "react-toastify";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #003459;
  }
`;

const RecoveryPassword = () => {
  const { user } = useHomeLayoutContext();
  const [email, setEmail] = useState();
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function validateEmail(input1, input2) {
    if (input1 === input2) {
      return true;
    }
    return false;
  }

  return (
    <Wrapper>
      <Form style={{ width: "320px", marginTop: "100px" }}>
        <p>
          Please enter the email address associated with your account. We'll
          promptly send you a link to reset your password.
        </p>
        <FormRow
          type={"email"}
          name={"email"}
          onChange={handleChangeEmail}
          style={{
            border:
              !validateEmail(user.email, email) &&
              email !== "" &&
              " 2px solid red",
            outline: "none",
          }}
        />
        <Link to={"/confirm-password"}>
          <SubmitBtn
            text="Send reset link"
            disabled={!validateEmail(user.email, email)}
            style={{
              backgroundColor: !validateEmail(user.email, email) && "gray",
            }}
            onClick={() =>
              toast.success("you can change your password", {
                closeOnClick: true,
              })
            }
          />
        </Link>
      </Form>
    </Wrapper>
  );
};

export default RecoveryPassword;
