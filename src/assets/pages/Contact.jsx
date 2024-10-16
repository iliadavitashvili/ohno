import { Form, redirect } from "react-router-dom";
import styled from "styled-components";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";
import emailIcon from "../images/contactIcons/email.png";
import faxIcon from "../images/contactIcons/fax.png";
import phoneIcon from "../images/contactIcons/phone.png";
import mapImage from "../images/contactIcons/map.png";
import { toast } from "react-toastify";
import validateEmail from "../utils/validateEmail";
const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin: 30px auto;
  h1 {
    font-size: 53px;
  }
  span {
    color: #003459;
  }
  p {
    max-width: 35vw;
    font-weight: bold;
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
  }
  .form-wrapper form {
    display: flex;
    flex-direction: column;
    max-width: 35vw;
  }
  img {
    height: 70vh;
  }
  select {
    height: 50px;
    padding: 0 10px;
  }
  .cIcons {
    width: 28px;
    height: 28px;
  }
  .contacts-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contacts-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  .contacts-wrapper > div > div {
    display: flex;
    flex-direction: column;
  }
  .contacts-wrapper p,
  .contacts-wrapper span {
    margin: 0;
    margin-left: 5px;
    font-size: 13px;
  }
  @media (max-width: 1000px) {
    margin: unset;
    padding-bottom: 50px 0;
    margin: 0 auto;
    margin-bottom: 50px;
    p {
      max-width: unset;
    }
    .map {
      display: none;
    }
    .form-wrapper {
      padding: 0 10px;
      display: flex;
      justify-content: center;
      width: unset;
    }
    .form-wrapper form {
      margin: 0 auto;
      max-width: 80vw;
      justify-content: center;
    }
    #form-wrapper input {
      overflow: unset;
      align-self: center;
      width: 80vw;
    }
    select {
      height: 50px;
      padding: 0 10px;
      margin-left: 10px;
    }
  }
`;
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  if (data.name.length < 3) {
    toast.error("name must be more than 2 character");
  } else if (data.phone.length < 8) {
    toast.error("number must be more than 7 character");
  } else if (data.email && !validateEmail(data.email)) {
    toast.error("enter valid email");
  } else {
    toast.success(`${data.name} we will contact soon`);
    return redirect("/");
  }

  console.log(data, "here");
  return null;
};
const Contact = () => {
  return (
    <Wrapper>
      <div className="form-wrapper" id="form-wrapper">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
        <Form method="post">
          <FormRow placeholder="Name *" type={"text"} name={"name"} />
          <FormRow placeholder="Email" type={"email"} name={"email"} />
          <FormRow
            placeholder="Phone Number *"
            type={"number"}
            name={"phone"}
          />
          <select name="select">
            <option>How did you find us?</option>
            <option>Direct web app</option>
            <option>Social media</option>
            <option>other</option>
          </select>
          <SubmitBtn text="Send" style={{ borderRadius: "0" }} />
        </Form>
        <div className="contacts-wrapper">
          <div>
            <img className="cIcons" src={phoneIcon} alt="phone icon" />
            <div>
              <p>Phone</p>
              <span>03 5432 1234</span>
            </div>
          </div>
          <div>
            <img className="cIcons" src={faxIcon} alt="fax icon" />
            <div>
              <p>Fax</p>
              <span>03 5432 1234</span>
            </div>
          </div>
          <div>
            <img className="cIcons" src={emailIcon} alt="email icon" />
            <div>
              <p>Email</p>
              <span>info@marcc.com.au</span>
            </div>
          </div>
        </div>
      </div>
      <img src={mapImage} alt="map" className="map" />
    </Wrapper>
  );
};

export default Contact;
