import { Form, redirect } from "react-router-dom";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";
import { useState } from "react";
import { toast } from "react-toastify";
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const action = async ({ request }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  user.password = data.password;
  console.log(password, "password", user);
  localStorage.setItem("user", JSON.stringify(user));
  window.dispatchEvent(new Event("userUpdated"));
  toast.success("Password changed successfully", {
    closeOnClick: true,
  });
  return redirect("/login");
};
const ConfirmPassword = () => {
  const [changePassword, setChangePassword] = useState({
    password: "",
    confirmPassword: "",
  });
  function handleChangePassword(e) {
    setChangePassword((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  function validatePasswordChange(pass1, pass2) {
    if (pass1 === pass2 && pass1.length > 3) {
      return true;
    }
    return false;
  }
  // console.log(
  //   validatePasswordChange(
  //     changePassword.password,
  //     changePassword.confirmPassword
  //   )
  // );
  return (
    <Wrapper>
      <Form style={{ width: "320px", marginTop: "100px" }} method="post">
        <FormRow
          type={"password"}
          name={"password"}
          text={"New Password"}
          onChange={handleChangePassword}
          placeholder={"password should be more than 3 character"}
          style={{
            border:
              changePassword.password.length < 3 &&
              changePassword.password != "" &&
              " 2px solid red",
            outline: "none",
          }}
        />
        <FormRow
          type={"password"}
          name={"confirmPassword"}
          text={"Confirm Password"}
          onChange={handleChangePassword}
          placeholder={"passwords should match  "}
          style={{
            border:
              !validatePasswordChange(
                changePassword.password,
                changePassword.confirmPassword
              ) &&
              changePassword.confirmPassword !== "" &&
              " 2px solid red",
            outline: "none",
          }}
        />
        <SubmitBtn
          text="Reset password"
          style={{
            backgroundColor:
              !validatePasswordChange(
                changePassword.password,
                changePassword.confirmPassword
              ) && "gray",
          }}
          disabled={
            !validatePasswordChange(
              changePassword.password,
              changePassword.confirmPassword
            )
          }
        />
      </Form>
    </Wrapper>
  );
};

export default ConfirmPassword;
