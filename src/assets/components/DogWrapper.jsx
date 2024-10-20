import { redirect, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  width: 264px;
  background-color: #ffffff;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 1px 1px 5px 1px gray;
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
  }
  .dog-price {
    font-weight: bold;
  }
  .dog-info {
  }
  .gender small {
    margin-left: 15px;
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    box-sizing: border-box;
    width: 180px;
    display: flex;

    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    img {
      width: 169px;
      height: 169px;
    }
    .dog-info {
    }
    .dog-name {
      font-size: 14px;
      font-family: sans-serif;
    }
    .gender {
      display: flex;
      font-size: 12px;
      justify-content: space-between;
    }
    .gender small {
      margin: unset;
      font-size: 12px;
    }
    .gender > p {
      margin: 0%;
    }
    .dog-price {
      font-weight: bold;
      font-size: 16px;
      margin: 0;
    }
  }
`;

const DogWrapper = ({ dog, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <img src={dog.image} alt={dog.breed} />
      <div className="dog-info">
        <p className="dog-name">
          MO502 - {dog.breed} {dog.color}
        </p>
        <p className="gender">
          <small>
            gene: <span>{dog.gender}</span>
          </small>
          *
          <small>
            age: <span>{dog.age} year</span>{" "}
          </small>
        </p>
        <p className="dog-price">{dog.price}.00 GEL</p>
      </div>
    </Wrapper>
  );
};

export default DogWrapper;
