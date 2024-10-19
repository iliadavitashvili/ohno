import styled from "styled-components";
import HomeFifthSection from "./HomeFifthSection";
import HomeFirstSection from "./HomeFirstSection";
import HomeForthSection from "./HomeForthSection";
import HomeSecondSection from "./HomeSecondSection";
import HomeSeventhSection from "./HomeSeventhSection";
import HomeSixthSection from "./HomeSixthSection";
import HomeThirdSection from "./HomeThirdSection";
const Wrapper = styled.main`
  .section {
  }
`;
const HomeContainer = () => {
  return (
    <Wrapper>
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeForthSection />
      <HomeFifthSection />
      <HomeSixthSection />
      <HomeSeventhSection />
    </Wrapper>
  );
};

export default HomeContainer;
