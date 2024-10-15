import styled from "styled-components";

import GoogleLogo from "../components/GoogleLogo";
import { Form, redirect, useActionData } from "react-router-dom";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
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
  .rp {
    font-size: 12px;
    color: #003459;
    justify-self: end;
    float: inline-end;
    text-decoration: none;
    font-weight: bold;
  }
  .su {
    margin-top: 30px;
    font-size: 14px;
    color: #003459;
    display: flex;
    justify-content: center;
    justify-self: center;
    width: 100%;
    text-decoration: none;
    line-height: 24.5px;
  }
`;
export const action = async ({ request }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  data.login = true;
  data.name = user.name;
  localStorage.setItem("user", JSON.stringify(data));
  window.dispatchEvent(new Event("userUpdated"));
  toast.success("Login successful", {
    autoClose: 1000,
    closeOnClick: true,
  });

  return redirect("/");
};
const Login = () => {
  const { user } = useHomeLayoutContext();
  const [localUser, setLocalUser] = useState({ email: "", password: "" });

  function handleChange(e) {
    setLocalUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function validateInputs(user, localUser) {
    if (
      user?.email === localUser.email &&
      user?.password === localUser.password
    ) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(validateInputs(user, localUser));
  // console.log(user.email, "< user", localUser.email, " <localuser");
  return (
    <Wrapper>
      <GoogleLogo />
      <Form style={{ width: "320px", marginTop: "100px" }} method="post">
        <FormRow
          type={"email"}
          name="email"
          onChange={handleChange}
          invalid={
            user?.email === localUser.email || localUser.email == ""
              ? false
              : "no such email"
          }
        />
        <FormRow
          type={"password"}
          name="password"
          onChange={handleChange}
          invalid={
            user?.password === localUser.password || localUser.password == ""
              ? false
              : "incorrect password"
          }
        />
        <Link to={"/recovery-password"} className="rp">
          Forgot Password?
        </Link>
        <SubmitBtn
          text={"Login"}
          disabled={!validateInputs(user, localUser)}
          style={{
            backgroundColor: !validateInputs(user, localUser) && "gray",
          }}
        />
        <Link to={"/register"} className="su">
          Don't have an account? Sign up
        </Link>
      </Form>
    </Wrapper>
  );
};

export default Login;
