import styled from "styled-components";
import dogs from "../utils/dogs.js";
import DogWrapper from "../components/DogWrapper.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import leftArrow from "../images/leftArrow.png";
import rightArrow from "../images/rightArrow.png";
import filterIcon from "../images/filterIcon.png";
const Wrapper = styled.section`
  max-width: 1440px;
  background-color: #ebeeef;
  padding: 0 100px;
  display: flex;
  .price-inputs-div > input {
    display: inline-block;
    width: 60px;
  }
  .dogs-counter-wrapper {
    display: flex;
    justify-content: space-between;
    width: 60vw;
    margin-left: 20%;
    align-items: center;
    float: right;
  }
  .page-arrows {
    width: 15px;
    padding: 20px;
  }
  .pagination-buttons {
    background-color: #003459;
    border: none;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    width: 34px;
    height: 34px;
  }
  .filter-names {
    color: #00171f;
    font-size: 16px;
    font-weight: bold;
  }
  input[type="checkbox"] {
    size: 2;
  }
  .closing-filter {
    display: none;
  }
  .dogs-wrapper {
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(3, 284px);
    grid-template-rows: minmax(100px, auto);
    justify-content: end;
  }
  .dogs-container {
    width: 1200px;
    /* margin-left: 100px; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .dogs-count {
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    align-items: center;
  }
  select {
    border-radius: 10px;
    height: 40px;
  }
  .filter {
    width: 30%;
  }
  .filter h2,
  .dogs-count {
    color: #003459;
  }
  .buttons-wrapper {
    width: 200px;
    align-self: center;
    margin: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  input,
  label {
    cursor: pointer;
  }
  label {
    font-size: 20px;
    margin-left: 10px;
    width: 100vw;
    color: #00171f;
  }
  .price-input {
    width: 100px;
  }
  .price-input:nth-child(2) {
    margin-left: 30px;
  }
  .filter-icon-wrapper {
    display: none;
  }
  @media (max-width: 1000px) {
    padding: 0;
    .dogs-counter-wrapper {
      display: unset;
      justify-content: unset;
      width: unset;
      margin-left: unset;
      align-items: unset;
      float: unset;
    }
    .dogs-count {
      flex-direction: row;
      justify-content: space-between;

      padding: 10px 20px;
    }
    .filter-icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
    .filter-icon-wrapper .filter-icon {
      width: unset;
      height: unset;
    }
    .filter {
      /* position: absolute; */
      /* display: none; */
      padding-left: 10px;
      background-color: #fceed5;
      box-shadow: 2px 2px 2px 2px gray;
      border-radius: 10px;
      position: fixed;
      width: 70vw;
      left: 15px;
    }
    .dogs-wrapper {
      width: 100%;
      display: grid;
      grid-gap: 20px;
      grid-template-columns: repeat(2, 185px);
      grid-template-rows: minmax(100px, auto);
      justify-content: start;
    }
    .dogs-container {
      width: 100vw;
      padding: 0;
      display: flex;
      justify-content: center;
    }
    .closing-filter {
      display: unset;
    }
    .dogs-container img {
      width: 169px;
      height: 169px;
    }
    .smalls {
      width: auto;
    }
    #page-arrows {
      width: unset;
      height: unset;
    }
  }
`;

const Category = () => {
  // console.log();
  const [isMobileFilter, setIsMobileFilter] = useState(
    window.innerWidth < 1000 ? false : true
  );
  const [newDogsArray, setNewDogsArray] = useState(dogs);
  const [filteredDogs, setFilteredDogs] = useState(dogs); // New state for filtered dogs
  const [filterData, setFilterData] = useState({
    gender: { male: false, female: false },
    color: {
      white: false,
      gray: false,
      black: false,
      ["black&white"]: false,
      brown: false,
      ["Black & Tan"]: false,
    },
    breed: { small: false, medium: false, big: false },
  });

  const { page } = useParams();
  const navigate = useNavigate();

  const pageSize = 15;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const [currentDogs, setCurrentDogs] = useState([]);

  const lastPage = Math.ceil(
    filteredDogs.length / pageSize || dogs.length / pageSize
  );

  useEffect(() => {
    setCurrentDogs(filteredDogs.slice(startIndex, endIndex));
  }, [page, filteredDogs]);

  const onFilterChange = (e) => {
    const { className: filterType, id: filterValue } = e.target;

    setFilterData((prev) => {
      const updatedFilterData = {
        ...prev,
        [filterType]: {
          ...prev[filterType],
          [filterValue]: !prev[filterType][filterValue],
        },
      };

      const filteredList = dogs.filter((dogy) => {
        const isMale = updatedFilterData.gender.male && dogy.gender === "Male";
        const isFemale =
          updatedFilterData.gender.female && dogy.gender === "Female";
        const isWhite = updatedFilterData.color.white && dogy.color === "White";
        const isGray = updatedFilterData.color.gray && dogy.color === "Gray";
        const isBlack = updatedFilterData.color.black && dogy.color === "Black";
        const isBlackAndWhite =
          updatedFilterData.color["black&white"] &&
          dogy.color === "Black & White";
        const isBrown = updatedFilterData.color.brown && dogy.color === "Brown";
        const isBlackAndTan =
          updatedFilterData.color["Black & Tan"] &&
          dogy.color === "Black & Tan";
        const isSmall = updatedFilterData.breed.small && dogy.size === "Small";
        const isMedium =
          updatedFilterData.breed.medium && dogy.size === "Medium";
        const isBig = updatedFilterData.breed.big && dogy.size === "Large";

        return (
          isMale ||
          isFemale ||
          isWhite ||
          isGray ||
          isBlack ||
          isBlackAndWhite ||
          isBrown ||
          isBlackAndTan ||
          isSmall ||
          isMedium ||
          isBig
        );
      });

      setFilteredDogs(filteredList);
      navigate("/category/1");

      return updatedFilterData;
    });
  };

  const handlePageChange = (newPage) => {
    navigate(`/category/${newPage}`);
    window.scrollTo(0, 0);
  };
  const dogLink = useCallback((id) => {
    navigate(`/${id}`);
  }, []);
  let buttonsCount = new Array(lastPage).fill(1);
  {
    currentDogs.length === 0 &&
      setCurrentDogs(dogs.slice(startIndex, endIndex));
  }
  return (
    <Wrapper>
      {isMobileFilter && (
        <div className="filter">
          {isMobileFilter && (
            <h1
              className="closing-filter"
              onClick={() => {
                setIsMobileFilter((prev) => !prev);
              }}
              style={{
                position: isMobileFilter && "absolute",
                right: "30px",
                top: "10px",
                scale: "1.7",
                color: "black",
              }}
            >
              X
            </h1>
          )}
          <h2>Filter</h2>
          <form>
            <p className="filter-names">Gender</p>
            <p>
              <input
                onChange={onFilterChange}
                type="checkbox"
                value={"male"}
                id="male"
                checked={filterData.gender.male}
                className="gender"
              />
              <label htmlFor="male">Male</label>
            </p>
            <p>
              <input
                onChange={onFilterChange}
                checked={filterData.gender.female}
                type="checkbox"
                value={"female"}
                id="female"
                className="gender"
              />
              <label htmlFor="female">Female</label>
            </p>
            <hr />
            <p className="filter-names">Color</p>
            <p>
              <input
                checked={filterData.color.white}
                onChange={onFilterChange}
                type="checkbox"
                value={"white"}
                id="white"
                className="color"
              />
              <label htmlFor="white">White</label>
            </p>
            <p>
              <input
                checked={filterData.color.gray}
                onChange={onFilterChange}
                type="checkbox"
                value={"gray"}
                id="gray"
                className="color"
              />
              <label htmlFor="gray">Gray</label>
            </p>
            <p>
              <input
                checked={filterData.color.black}
                onChange={onFilterChange}
                type="checkbox"
                value={"black"}
                id="black"
                className="color"
              />
              <label htmlFor="black">Black</label>
            </p>
            <p>
              <input
                checked={filterData.color["black&white"]}
                onChange={onFilterChange}
                type="checkbox"
                value={"black & white"}
                style={{ whiteSpace: "wrap" }}
                id="black&white"
                className="color"
              />{" "}
              <label htmlFor="black&white">Black & White</label>
            </p>
            <p>
              <input
                checked={filterData.color.brown}
                onChange={onFilterChange}
                type="checkbox"
                value={"brown"}
                id="brown"
                className="color"
              />
              <label htmlFor="brown">Brown</label>
            </p>
            <p>
              <input
                checked={filterData.color["black & tan"]}
                onChange={onFilterChange}
                type="checkbox"
                value={"Black & Tan"}
                id="Black & Tan"
                className="color"
              />
              <label htmlFor="Black & Tan">Black & Tan</label>
            </p>
            <hr />
            <p className="filter-names">Price</p>
            <div className="price-inputs-div">
              <input
                //   onChange={onFilterChange}
                className="price-input"
                type="number"
                placeholder="MIN"
                min={400}
              />
              <input
                //   onChange={onFilterChange}
                className="price-input"
                type="number"
                placeholder="MAX"
                min={"500"}
              />
            </div>
            <hr />
            <p className="filter-names">Breed</p>
            <p>
              <input
                onChange={onFilterChange}
                type="checkbox"
                value={"small"}
                id="small"
                checked={filterData.breed.small}
                className="breed"
              />
              <label htmlFor="small">Small</label>
            </p>
            <p>
              <input
                checked={filterData.breed.medium}
                onChange={onFilterChange}
                type="checkbox"
                value={"medium"}
                id="medium"
                className="breed"
              />
              <label htmlFor="medium">Medium</label>
            </p>
            <p>
              <input
                onChange={onFilterChange}
                checked={filterData.breed.large}
                type="checkbox"
                value={"big"}
                id="big"
                className="breed"
              />
              <label htmlFor="big">Big</label>
            </p>
          </form>{" "}
        </div>
      )}

      <div className="dogs-container">
        <div className="dogs-count">
          <div className="dogs-counter-wrapper">
            <h2>
              Dogs:{" "}
              {filteredDogs.length !== 0 ? filteredDogs.length : dogs.length}
            </h2>
            <select
              onChange={(e) => {
                const sortOrder = e.target.value;
                if (sortOrder === "A-Z") {
                  setCurrentDogs(
                    [...currentDogs].sort((a, b) =>
                      a.breed.localeCompare(b.breed)
                    )
                  );
                } else if (sortOrder === "Z-A") {
                  setCurrentDogs(
                    [...currentDogs].sort((a, b) =>
                      b.breed.localeCompare(a.breed)
                    )
                  );
                } else if (sortOrder === "initial") {
                  setCurrentDogs(currentDogs);
                }
              }}
            >
              <option value={"initial"}>Sort by: Popular</option>
              <option value={"A-Z"}>A-Z</option>
              <option value={"Z-A"}>Z-A</option>
            </select>
          </div>
          <div
            className="filter-icon-wrapper"
            onClick={() => setIsMobileFilter((prev) => !prev)}
          >
            <img src={filterIcon} alt="filter-icon" className="filter-icon" />
            <p>Filter</p>
          </div>
        </div>
        <div className="dogs-wrapper">
          {currentDogs?.map((dog) => (
            <DogWrapper
              className="smalls"
              key={dog.sku}
              id={dog.sku}
              dog={dog}
              onClick={() => dogLink(dog.sku)}
            />
          ))}
        </div>
        <div className="buttons-wrapper">
          {lastPage > 1 && (
            <>
              <img
                className="page-arrows"
                id="page-arrows"
                src={leftArrow}
                alt="left direction arrow for page"
                onClick={() => handlePageChange(Math.max(page - 1, 1))}
              />

              {buttonsCount.map((_, index) => (
                <button
                  style={{ border: page == index + 1 && "3px solid lime" }}
                  className="pagination-buttons"
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <img
                src={rightArrow}
                className="page-arrows"
                id="page-arrows"
                alt="right direction arrow for page"
                onClick={() =>
                  handlePageChange(Math.min(Number(page) + 1, lastPage))
                }
              />
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
export default Category;
