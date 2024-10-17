import { redirect, useParams } from "react-router-dom";
import styled from "styled-components";

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
`;

const DogWrapper = ({ dog, ...rest }) => {
  //   const params = useParams();

  //   console.log(dog);
  return (
    <Wrapper {...rest}>
      <img
        src={dog.image}
        alt={dog.breed}
        // onClick={() => redirect(`/${dog.sku}`)}
      />
      <div className="dog-info">
        <p className="dog-name">
          MO502 - {dog.breed} {dog.color}
        </p>
        <p className="gender">
          <small style={{ marginRight: "15px", fontSize: "16px" }}>
            gene: <span>{dog.gender}</span>
          </small>
          *
          <small style={{ marginLeft: "15px", fontSize: "16px" }}>
            age: <span>{dog.age} year</span>{" "}
          </small>
        </p>
        <p className="dog-price">{dog.price}.00 GEL</p>
      </div>
    </Wrapper>
  );
};

export default DogWrapper;
