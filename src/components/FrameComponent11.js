import styled from "styled-components";
import PropTypes from "prop-types";

const BestMobile = styled.p`
  margin: 0;
`;
const BestMobileAppShowcaseContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 75px;
  font-weight: 600;
  font-family: inherit;
  z-index: 2;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-33xl);
    line-height: 60px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-20xl);
    line-height: 45px;
  }
`;
const BestMobileAppShowcaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const AeneanDictumOdio = styled.span`
  display: block;
`;
const AeneanDictumOdioContainer = styled.p`
  margin: 0;
  height: 50px;
  position: relative;
  font-size: var(--font-size-base);
  line-height: 25px;
  color: var(--color-dimgray-200);
  display: inline-block;
  z-index: 2;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-18xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-lg);
  }
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xl-9) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const FollowUs = styled.div`
  width: 77px;
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 25px;
  text-transform: uppercase;
  display: inline-block;
  transform: rotate(-90deg);
  flex-shrink: 0;
  z-index: 2;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const FrameChild = styled.div`
  height: 60px;
  width: 198px;
  position: relative;
  border-radius: var(--br-31xl);
  background-color: var(--color-black);
  display: none;
`;
const ReadMore = styled.div`
  position: relative;
  line-height: 25px;
  font-weight: 500;
  display: inline-block;
  min-width: 97px;
  z-index: 3;
`;
const RectangleParent = styled.div`
  flex: 1;
  border-radius: var(--br-31xl);
  background-color: var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-mid) var(--padding-25xl) var(--padding-lg);
  white-space: nowrap;
  z-index: 2;
`;
const FrameDiv = styled.div`
  width: 206px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs);
  box-sizing: border-box;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const FrameParent = styled.div`
  width: 1265.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-19xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-lgi);
  }
`;
const Desktop2InnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-41xl) var(--padding-162xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-46xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-11xl);
    padding-right: var(--padding-11xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-99xl);
    box-sizing: border-box;
  }
`;

const FrameComponent11 = ({ className = "" }) => {
  return (
    <Desktop2InnerRoot className={className}>
      <FrameParent>
        <FrameGroup>
          <FrameWrapper>
            <FrameContainer>
              <BestMobileAppShowcaseWrapper>
                <BestMobileAppShowcaseContainer>
                  <BestMobile>{`Best Mobile `}</BestMobile>
                  <BestMobile>App Showcase</BestMobile>
                </BestMobileAppShowcaseContainer>
              </BestMobileAppShowcaseWrapper>
              <AeneanDictumOdioContainer>
                <AeneanDictumOdio>{`Aenean dictum odio dapibus turpis dapibus vestibulum. Mauris quis massa `}</AeneanDictumOdio>
                <AeneanDictumOdio>
                  nisi. Nullam porta lorem at volutpat euismod. Proin in ex
                  nunc.
                </AeneanDictumOdio>
              </AeneanDictumOdioContainer>
            </FrameContainer>
          </FrameWrapper>
          <FollowUs>Follow Us</FollowUs>
        </FrameGroup>
        <FrameDiv>
          <RectangleParent>
            <FrameChild />
            <ReadMore>Read More</ReadMore>
          </RectangleParent>
        </FrameDiv>
      </FrameParent>
    </Desktop2InnerRoot>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
