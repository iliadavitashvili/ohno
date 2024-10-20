import { redirect, useParams } from "react-router-dom";
import styled from "styled-components";
import giftIcon from "../images/homeForthSectionImages/gift.png";
const Wrapper = styled.div`
  padding: 10px;
  width: 264px;
  background-color: #ffffff;
  border-radius: 15px;
  cursor: pointer;

  img {
    width: 264px;
    height: 264px;
    object-fit: fill;
    border-radius: 10px;
  }
  img:hover {
    scale: 1.1;
    transition: 0.2s;
  }
  .dog-name {
    font-size: 16px;
    font-weight: bold;
    font-family: "pro-display", "sans-serif";
  }
  span {
    color: gray;
  }
  .gender {
    display: flex;
    justify-content: left;
  }
  .gender > p {
    margin: 0%;
    color: gray;
  }
  .dog-price {
    font-weight: bold;
  }
  .dog-info {
  }
  .gender {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .gender small {
    font-size: 16px;
  }
  .gift {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fceed5;
    border-radius: 5px;
  }
  .gift img {
    width: 18px;
    height: 18px;
    border-radius: unset;
  }
  .gift p {
    font-weight: bold;
    font-family: "pro-display", "sans-serif";
  }
`;

const ProductsWrapper = ({
  name,
  product,
  size,
  price,
  category,
  image,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <img src={image} alt={product} />
      <div className="dog-info">
        <p className="dog-name">{name}</p>
        <p className="gender">
          <small>
            <span>product:</span>
            <span>{product}</span>
          </small>
          *
          <small>
            <span>size:</span>
            <span>{size} </span>
          </small>
        </p>
        <p className="dog-price">{price}</p>
      </div>
      <div className="gift">
        <img src={giftIcon} alt="gift icon" />*<p>{category}</p>
      </div>
    </Wrapper>
  );
};

export default ProductsWrapper;
