import { useParams } from "react-router-dom";
import styled from "styled-components";
import dogs from "../utils/dogs";
import CustomButton from "../components/CustomButton";
import guaranteeRed from "../images/guaranteeIcons/guaranteeRed.png";
import guaranteeYellow from "../images/guaranteeIcons/guaranteeYellow.png";
import fbIcon from "../images/socIcons/facebook.png";
import instIcon from "../images/socIcons/instagram.png";
import twiterIcon from "../images/socIcons/twitter.png";
import youTubeIcon from "../images/socIcons/youtube.png";
import shareIcon from "../images/socIcons/shareIcon.png";
import DesktopDogInfo from "../components/DesktopDogInfo";
import MobileDogInfo from "../components/MobileDogInfo";

const Wrapper = styled.div`
  .dog-info {
    /* border: 1px solid silver; */
  }
`;

const Dog = () => {
  const { skuId } = useParams();
  const currentDog = dogs.filter((dog) => skuId == dog.sku)[0];
  // console.log(currentDog);
  return (
    <Wrapper>
      <DesktopDogInfo skuId={skuId} />
      <MobileDogInfo skuId={skuId} />
    </Wrapper>
  );
};

export default Dog;
