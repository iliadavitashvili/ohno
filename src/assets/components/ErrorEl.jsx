import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
const ErrorEl = () => {
  return (
    <>
      Error ocurred ####
      <Link
        to={"/"}
        style={{
          scale: 4,
          fontSize: "70px",
          color: "red",
        }}
      >
        Main
      </Link>
    </>
  );
};

export default ErrorEl;
