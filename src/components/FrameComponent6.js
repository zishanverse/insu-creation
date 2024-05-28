import styled from "styled-components";
import FrameComponent7 from "./FrameComponent7";
import PropTypes from "prop-types";

const HowDoesThis = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 25px;
  font-weight: 600;
  font-family: inherit;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
    line-height: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 15px;
  }
`;
const HowDoesThisAppWorkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const Svg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.11);
  border-radius: var(--br-6xl);
  background-color: var(--color-white);
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 34px;
  left: 29px;
  width: 82px;
  height: 82px;
  z-index: 2;
`;
const SvgParent = styled.div`
  height: 100%;
  width: 550px;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  bottom: 0px;
  left: 0px;
`;
const MakeAProfile = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 25px;
  font-weight: 500;
  font-family: inherit;
  z-index: 2;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 20px;
  }
`;
const AliquamVariusLigula = styled.p`
  margin: 0;
  align-self: stretch;
  height: 70px;
  position: relative;
  line-height: 20px;
  display: inline-block;
  flex-shrink: 0;
  z-index: 2;
`;
const AliquamVariusLigulaNecLeoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-18xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  margin-left: -176px;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-200);
`;
const FrameDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xl) 0px var(--padding-base) var(--padding-125xl);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-53xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs) 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const FrameWrapper1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameGroup = styled.div`
  width: 571px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xl);
  max-width: 100%;
  font-size: var(--font-size-6xl);
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(
    180deg,
    rgba(137, 229, 145, 0.02),
    rgba(137, 229, 145, 0.13) 50%,
    rgba(137, 229, 145, 0.02)
  );
  width: 100%;
  height: 100%;
`;
const Dsd3Icon = styled.img`
  position: absolute;
  top: 176px;
  left: 137px;
  width: 104px;
  height: 16px;
  object-fit: contain;
  z-index: 1;
`;
const RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 160px;
  left: 729px;
  width: 630px;
  height: 630px;
  object-fit: contain;
  z-index: 1;
`;
const ContainerParent = styled.div`
  width: 1457px;
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: -17px;
  bottom: 0px;
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-113xl) var(--padding-117xl) var(--padding-91xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-54xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1050px) {
    gap: var(--gap-17xl);
    padding: var(--padding-67xl) var(--padding-49xl) var(--padding-52xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-lg);
    padding: var(--padding-37xl) var(--padding-xl) var(--padding-27xl);
    box-sizing: border-box;
  }
`;

const FrameComponent6 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <HowDoesThisAppWorkWrapper>
        <HowDoesThis>How does This App Work?</HowDoesThis>
      </HowDoesThisAppWorkWrapper>
      <FrameGroup>
        <FrameContainer>
          <FrameWrapper>
            <FrameDiv>
              <SvgParent>
                <Svg />
                <FrameChild loading="lazy" alt="" src="/group-68.svg" />
              </SvgParent>
              <MakeAProfile>Make A Profile</MakeAProfile>
              <AliquamVariusLigulaNecLeoWrapper>
                <AliquamVariusLigula>
                  Aliquam varius ligula nec leo tempus porta. Vestibulum
                  suscipit leo at nunc imperdiet, quis lacinia nisi euismod.
                </AliquamVariusLigula>
              </AliquamVariusLigulaNecLeoWrapper>
            </FrameDiv>
          </FrameWrapper>
          <FrameComponent7 />
        </FrameContainer>
        <FrameWrapper1>
          <FrameComponent7
            propAlignSelf="unset"
            propFlex="1"
            propBackgroundColor="rgba(241, 177, 26, 0.26)"
            propBackgroundColor1="rgba(241, 177, 26, 0.1)"
            propBackgroundColor2="#f1b11a"
          />
        </FrameWrapper1>
      </FrameGroup>
      <ContainerParent>
        <Container />
        <Dsd3Icon loading="lazy" alt="" src="/dsd-3@2x.png" />
        <RemovebgPreview1Icon
          loading="lazy"
          alt=""
          src="/4934434removebgpreview-1@2x.png"
        />
      </ContainerParent>
    </FrameParentRoot>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
