import styled from "styled-components";
import FrameComponent10 from "./FrameComponent10";
import PropTypes from "prop-types";

const EngagingSpacious = styled.p`
  margin: 0;
`;
const EngagingSpaciousContainer = styled.h2`
  margin: 0;
  width: 260px;
  position: relative;
  font-size: inherit;
  text-transform: capitalize;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  z-index: 3;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const EngagingSpaciousSchoolCamWrapper = styled.div`
  width: 574px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const HiseSedAugue = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  text-transform: capitalize;
  font-family: var(--font-poppins);
  color: var(--color-gray-100);
  z-index: 3;
`;
const FrameGroup = styled.div`
  width: 592px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-28xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-4xl);
  }
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-5xl) 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameContainer = styled.div`
  width: 1099.7px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-54xl-3);
  max-width: 100%;
  text-align: left;
  color: var(--color-gray-300);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    gap: var(--gap-18xl);
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-lg);
  }
`;
const FrameParent = styled.div`
  width: 1099.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-37xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-9xl);
  }
`;
const Desktop2InnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) var(--padding-65xl-4) var(--padding-11xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: center;
  font-size: var(--font-size-6xl);
  color: var(--color-black);
  font-family: var(--font-inter);
  @media screen and (max-width: 1050px) {
    padding-bottom: var(--padding-36xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-17xl);
    box-sizing: border-box;
  }
`;

const FrameComponent9 = ({ className = "" }) => {
  return (
    <Desktop2InnerRoot className={className}>
      <FrameParent>
        <FrameWrapper>
          <FrameGroup>
            <EngagingSpaciousSchoolCamWrapper>
              <EngagingSpaciousContainer>
                <EngagingSpacious>{`Engaging & Spacious `}</EngagingSpacious>
                <EngagingSpacious>School Campus</EngagingSpacious>
              </EngagingSpaciousContainer>
            </EngagingSpaciousSchoolCamWrapper>
            <HiseSedAugue>
              Hise sed augue vitae felis pellentesque varius nec quis nunc.
              Morbi mauris augue, pulvinar quis luctus eget. Phasellus gravida
              lacus quis eros lobortis, nec dapibus quam gravida.
            </HiseSedAugue>
          </FrameGroup>
        </FrameWrapper>
        <FrameContainer>
          <FrameComponent10 item="/item.svg" tab="/vector-2.svg" />
          <FrameComponent10
            item="/vector-6-1.svg"
            tab="/vector-4.svg"
            propWidth="312.7px"
            propPadding="0px var(--padding-xl) 0px var(--padding-14xl)"
            propColor="#000"
            propWidth1="unset"
            propDisplay="unset"
            propAlignSelf="stretch"
            propWidth2="100%"
            propRight="0px"
            propBorder="0px solid var(--color-lightsteelblue)"
          />
          <FrameComponent10
            item="/item.svg"
            tab="/vector-6.svg"
            propWidth="312.7px"
            propPadding="0px var(--padding-xl) 0px var(--padding-14xl)"
            propColor="#000"
            propWidth1="unset"
            propDisplay="unset"
            propAlignSelf="stretch"
            propWidth2="100%"
            propRight="0px"
            propBorder="0px solid var(--color-lightsteelblue)"
          />
        </FrameContainer>
      </FrameParent>
    </Desktop2InnerRoot>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
