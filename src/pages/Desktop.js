import FrameComponent12 from "../components/FrameComponent12";
import styled from "styled-components";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";

const HomeAboutUs = styled.div`
  position: relative;
  line-height: 25px;
  font-weight: 600;
  white-space: pre-wrap;
  flex-shrink: 0;
  z-index: 2;
`;
const HomeAboutUsFeaturesContactWrapper = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 187.1px 824px;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-lg);
  color: #070707;
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    padding-left: 412px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: 206px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const Dsd = styled.div`
  width: 104px;
  height: 16px;
  position: relative;
  display: none;
  z-index: 3;
`;
const Dsd11Icon = styled.img`
  width: 1047px;
  position: relative;
  max-height: 100%;
  object-fit: contain;
  max-width: 100%;
  z-index: 3;
`;
const Dsd11Wrapper = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-4xl) 99px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Asd1Icon = styled.img`
  width: 511.7px;
  position: relative;
  max-height: 100%;
  object-fit: contain;
  display: none;
  max-width: 100%;
  z-index: 6;
`;
const FrameParent = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 98px;
  box-sizing: border-box;
  gap: 25px;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 1200px) {
    padding-bottom: var(--padding-45xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: 42px;
    box-sizing: border-box;
  }
`;
const FrameChild = styled.div`
  width: 1453px;
  height: 928px;
  position: relative;
  background-color: var(--color-paleturquoise);
  display: none;
  max-width: 100%;
`;
const VectorIcon = styled.img`
  height: 15px;
  width: 15px;
  position: relative;
  min-height: 15px;
  z-index: 1;
`;
const VectorParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const FrameWrapper = styled.div`
  width: 1379px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const RectangleParent = styled.div`
  flex: 1;
  background-color: var(--color-paleturquoise);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-41xl) 15px 61px var(--padding-7xl);
  box-sizing: border-box;
  gap: var(--gap-2xl);
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    padding-top: var(--padding-20xl);
    padding-bottom: 40px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: 25px;
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
  }
`;
const Desktop2Inner = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 66.1px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  @media screen and (max-width: 1050px) {
    padding-bottom: 43px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-9xl);
    box-sizing: border-box;
  }
`;
const Desktop2Child = styled.div`
  align-self: stretch;
  height: -498px;
  position: relative;
  background-color: #fefff6;
  display: none;
  z-index: 10;
`;
const ReviewsFromStudents = styled.h1`
  margin: 0;
  height: 34px;
  position: relative;
  font-size: inherit;
  line-height: 40px;
  text-transform: capitalize;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  z-index: 2;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
    line-height: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 24px;
  }
`;
const Dsd22Icon = styled.img`
  height: 16px;
  width: 104px;
  position: relative;
  object-fit: cover;
  z-index: 2;
`;
const Dsd22Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-9xl) 0px var(--padding-xl);
`;
const ReviewsFromStudentsParent = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 17.7px;
  max-width: 100%;
`;
const FrameSection = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 126px 22px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;
const Desktop2Item = styled.footer`
  width: 1485px;
  height: 516px;
  position: relative;
  background-color: var(--color-gray-200);
  display: none;
  max-width: 100%;
  z-index: 13;
`;
const FrameItem = styled.div`
  height: 84px;
  width: 1440px;
  position: relative;
  background-color: var(--color-black);
  display: none;
  max-width: 100%;
`;
const Copyright = styled.div`
  position: relative;
  line-height: 18px;
  font-weight: 600;
  z-index: 4;
`;
const PrivacyPolicy = styled.p`
  margin: 0;
  position: relative;
  line-height: 18px;
  font-weight: 600;
  white-space: pre-wrap;
  z-index: 4;
`;
const PrivacyPolicySupportTerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const RectangleGroup = styled.section`
  align-self: stretch;
  background-color: var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-13xl) 207px 31px 182px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  gap: var(--gap-xl);
  z-index: 3;
  text-align: left;
  font-size: var(--font-size-smi);
  color: var(--color-white);
  font-family: var(--font-mulish);
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 750px) {
    padding-left: 91px;
    padding-right: 103px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const RectangleSection = styled.section`
  margin-left: -12px;
  width: 1485px;
  height: 500px;
  position: relative;
  background-color: var(--color-gray-200);
  max-width: 104%;
  flex-shrink: 0;
  z-index: 2;
`;
const DesktopRoot = styled.div`
  width: 100%;
  height: 5952px;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-16xl) 0px 0px;
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 750px) {
    height: auto;
  }
`;

const Desktop = () => {
  return (
    <DesktopRoot>
      <FrameComponent12 />
      <HomeAboutUsFeaturesContactWrapper>
        <HomeAboutUs>Home About Us Features Contact</HomeAboutUs>
      </HomeAboutUsFeaturesContactWrapper>
      <FrameComponent11 />
      <Dsd />
      <FrameComponent9 />
      <Dsd11Wrapper>
        <Dsd11Icon alt="" src="/dsd1-1@2x.png" />
      </Dsd11Wrapper>
      <Asd1Icon alt="" src="/asd-1@2x.png" />
      <FrameComponent8 />
      <FrameParent>
        <FrameComponent6 />
        <FrameComponent5 />
      </FrameParent>
      <Desktop2Inner>
        <RectangleParent>
          <FrameChild />
          <FrameComponent4 />
          <FrameComponent3 />
          <FrameWrapper>
            <VectorParent>
              <VectorIcon alt="" src="/vector-10.svg" />
              <VectorIcon alt="" src="/vector-11.svg" />
              <VectorIcon alt="" src="/vector-11.svg" />
            </VectorParent>
          </FrameWrapper>
        </RectangleParent>
      </Desktop2Inner>
      <Desktop2Child />
      <FrameSection>
        <ReviewsFromStudentsParent>
          <ReviewsFromStudents>Review's From Students</ReviewsFromStudents>
          <Dsd22Wrapper>
            <Dsd22Icon alt="" src="/dsd2-1@2x.png" />
          </Dsd22Wrapper>
        </ReviewsFromStudentsParent>
      </FrameSection>
      <FrameComponent2 />
      <Desktop2Item />
      <FrameComponent />
      <RectangleGroup>
        <FrameItem />
        <Copyright>Copyright © 2022 Educator. All rights reserved.</Copyright>
        <PrivacyPolicySupportTerWrapper>
          <PrivacyPolicy>{`PRIVACY POLICY    |     SUPPORT     |    TERMS & CONDITION`}</PrivacyPolicy>
        </PrivacyPolicySupportTerWrapper>
      </RectangleGroup>
      <RectangleSection />
    </DesktopRoot>
  );
};

export default Desktop;
