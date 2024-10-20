import { useParams } from "react-router-dom";
import styled from "styled-components";
import Chat from "../components/Chat";
import DesktopDogInfo from "../components/DesktopDogInfo";
import MobileDogInfo from "../components/MobileDogInfo";
import CurrentDogSlider from "../components/CurrentDogSlider";
import DogWrapper from "../components/DogWrapper";
import getRandomDogs from "../utils/randomDogs";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHomeLayoutContext } from "./HomeLayout";
const Wrapper = styled.div`
  margin: 20px 0;
  .info-wrapper {
    margin: 0 100px;
  }

  .info-wrapper h2 {
    color: #003459;
    font-size: 20px;
    font-weight: bolder;
    font-family: sans-serif;
  }
  .info-wrapper p {
    font-weight: bold;
  }
  .dogs-grid {
    width: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 284px);
    grid-template-rows: minmax(100px, auto);
    justify-content: center;
  }
  @media (max-width: 1000px) {
    .info-wrapper p {
      display: none;
    }
    .info-wrapper h2 {
      font-size: 16px;
    }
    .info-wrapper {
      margin: unset;
      margin-left: 20px;
    }
    .dogs-grid {
      width: 100vw;
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(2, 185px);
      grid-template-rows: minmax(100px, auto);
      justify-content: space-around;
      justify-items: center;
    }
  }
`;

const Dog = () => {
  const { skuId } = useParams();
  const navigate = useNavigate();
  const dogLink = useCallback((id) => {
    navigate(`/${id}`);
  }, []);
  // console.log(currentDog);
  // const [isChatOpen, setIsChatOpen] = useState(false);
  const { isChatOpen, setIsChatOpen } = useHomeLayoutContext();
  // console.log(isChatOpen);
  // console.log(isChatOpen, "here");
  return (
    <Wrapper>
      <DesktopDogInfo skuId={skuId} setIsChatOpen={setIsChatOpen} />
      <MobileDogInfo skuId={skuId} setIsChatOpen={setIsChatOpen} />
      <CurrentDogSlider />
      <section>
        <div className="info-wrapper">
          <div>
            <p>Whats new?</p>
            <h2>Take a look at some of our pets</h2>
          </div>
        </div>
        <div className="dogs-grid">
          {getRandomDogs(4).map((dog, index) => {
            return (
              <DogWrapper
                dog={dog}
                key={index}
                id={dog.sku}
                onClick={() => {
                  dogLink(dog.sku);
                  window.scrollTo(0, 0);
                }}
              />
            );
          })}
        </div>
      </section>
      {isChatOpen && <Chat setIsChatOpen={setIsChatOpen} />}
    </Wrapper>
  );
};

export default Dog;
