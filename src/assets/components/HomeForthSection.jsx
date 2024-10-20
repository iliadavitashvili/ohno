import React from "react";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import ProductWrapper from "./ProductWrapper";

import products from "../utils/products";
const Wrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 10px;
  .dogs-grid {
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 284px);
    grid-template-rows: minmax(100px, auto);
    justify-content: center;
  }
  .info-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 100px;
  }

  .info-wrapper h2 {
    color: #003459;
    font-size: 20px;
    font-weight: bolder;
    font-family: "pro-display", "sans-serif";
  }
  .info-wrapper p {
    font-weight: bold;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const HomeForthSection = () => {
  const product = products[0];

  return (
    <Wrapper>
      <div className="info-wrapper">
        <div>
          <p>Hard to choose right products for your pets?</p>
          <h2>Our Products</h2>
        </div>
        <CustomButton text={"View more"} icon={"arrow"} transparent />
      </div>
      <div className="dogs-grid">
        {products.map((product, index) => {
          return <ProductWrapper key={index} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

export default HomeForthSection;
