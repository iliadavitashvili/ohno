import styled from "styled-components";
import GoogleLogo from "../components/GoogleLogo";
import { Form, Link, redirect } from "react-router-dom";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";
import { useState } from "react";
import { toast } from "react-toastify";
import validateEmail from "../utils/validateEmail";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login {
    font-size: 14px;
    color: #003459;
    text-align: center;
    margin-top: 20px;
    text-decoration: none;
    font-weight: bold;
  }
  p {
    color: #003459;
  }
`;
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.login = false;
  localStorage.setItem("user", JSON.stringify(data));
  window.dispatchEvent(new Event("userUpdated"));
  toast.success("Registration complete", {
    autoClose: 1000,
    closeOnClick: true,
  });
  return redirect("/login");
};
const Register = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  function handleChange(e) {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function validateInputs(inputObj) {
    if (inputObj.name?.length > 3) {
      if (inputObj.email?.length > 5 && inputObj.email?.includes("@")) {
        if (inputObj.password?.length > 3) {
          return true;
        }
      }
    }
  }

  return (
    <Wrapper>
      <GoogleLogo />
      <Form style={{ width: "320px", marginTop: "100px" }} method="post">
        <FormRow
          type={"text"}
          name={"name"}
          onChange={handleChange}
          placeholder={"Name must be more than 3 character"}
          invalid={
            inputs.name.length <= 3 && inputs.name !== ""
              ? "Name must be more than 3 character"
              : false
          }
        />
        <FormRow
          type={"email"}
          name="email"
          onChange={handleChange}
          placeholder={`Min 5 character and include "@"`}
          invalid={
            !validateEmail(inputs.email) &&
            inputs.email != "" &&
            `Min 5 character and include "@"`
          }
        />
        <FormRow
          type={"password"}
          name="password"
          onChange={handleChange}
          placeholder={"Password must be more than 3 character"}
          invalid={
            inputs.password.length <= 3 && inputs.password !== ""
              ? `"Password must be more than 3 character"`
              : false
          }
        />
        <p>
          By creating an account you agree with our Terms of Service, Privacy
          Policy,
        </p>

        <SubmitBtn
          text="Create account"
          disabled={!validateInputs(inputs)}
          style={{ backgroundColor: !validateInputs(inputs) && "gray" }}
        />
      </Form>
      <Link className="login" to={"/login"}>
        Already have an account? Log in
      </Link>
    </Wrapper>
  );
};

export default Register;
