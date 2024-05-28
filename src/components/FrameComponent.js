import styled from "styled-components";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  height: 200px;
  width: 1052px;
  position: relative;
  border-radius: var(--br-mini);
  background-color: var(--color-lightgreen);
  display: none;
  max-width: 100%;
`;
const SubscribeOurNewsletter = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 20px;
  text-transform: capitalize;
  font-weight: 700;
  font-family: inherit;
  z-index: 4;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 16px;
  }
`;
const FrameItem = styled.img`
  height: 4px;
  width: 165px;
  position: relative;
  z-index: 4;
`;
const VectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-10xs);
`;
const ElementumExSimilique = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  line-height: 20px;
  text-transform: capitalize;
  font-family: var(--font-poppins);
  color: var(--color-darkslategray-300);
  z-index: 4;
`;
const SubscribeOurNewsletterParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
`;
const FrameContainer = styled.div`
  width: 425px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-14xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const FrameInner = styled.img`
  height: 146px;
  width: 2px;
  position: relative;
  z-index: 4;
`;
const RectangleDiv = styled.div`
  align-self: stretch;
  width: 438px;
  position: relative;
  border-radius: var(--br-31xl);
  background-color: var(--color-white);
  display: none;
  max-width: 100%;
`;
const FrameChild1 = styled.div`
  height: 61px;
  width: 136px;
  position: relative;
  border-radius: var(--br-31xl);
  background-color: var(--color-black);
  display: none;
`;
const Subsribe = styled.div`
  position: relative;
  line-height: 20px;
  text-transform: capitalize;
  font-weight: 500;
  display: inline-block;
  min-width: 74px;
  z-index: 6;
`;
const RectangleContainer = styled.div`
  border-radius: var(--br-31xl);
  background-color: var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xl) var(--padding-11xl) var(--padding-xl)
    var(--padding-13xl);
  z-index: 5;
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  border-radius: var(--br-31xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  max-width: 100%;
  z-index: 4;
`;
const FrameDiv = styled.div`
  width: 438px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-20xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-poppins);
`;
const RectangleParent = styled.div`
  border-radius: var(--br-mini);
  background-color: var(--color-lightgreen);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xl) var(--padding-29xl) var(--padding-7xl)
    var(--padding-36xl);
  box-sizing: border-box;
  gap: var(--gap-23xl);
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
    padding-left: var(--padding-8xl);
    padding-right: var(--padding-5xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-2xl);
  }
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
`;
const QuickLinksUseful = styled.div`
  position: relative;
  line-height: 20px;
  text-transform: capitalize;
  font-weight: 600;
  white-space: pre-wrap;
  z-index: 3;
`;
const QuickLinksUsefulLinksSchooWrapper = styled.div`
  align-self: stretch;
  display: flex;
  width: 50%;
  margin-left: 100px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px var(--padding-xl) 0px var(--padding-235xl);
  @media screen and (max-width: 1050px) {
    padding-left: var(--padding-108xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const VeroTemporMorbi = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  line-height: 18px;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 3;
`;
const VeroTemporMorbiAdipiscingWrapper = styled.div`
  width: 287px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-54xl-9) 0px 0px;
  box-sizing: border-box;
`;
const GroupIcon = styled.img`
  height: 3px;
  width: 56px;
  position: relative;
  z-index: 3;
`;
const FrameWrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs);
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 14px;
  height: 14px;
  z-index: 3;
`;
const FrameChild2 = styled.img`
  position: absolute;
  top: 30.9px;
  left: 1px;
  width: 14px;
  height: 18px;
  z-index: 3;
`;
const VectorParent = styled.div`
  width: 15px;
  height: 48.9px;
  position: relative;
`;
const FrameWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
`;
const Am = styled.div`
  position: relative;
  line-height: 20px;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 3;
`;
const AutQuaeConvallis = styled.p`
  margin: 0;
  align-self: stretch;
  height: 50.7px;
  position: relative;
  line-height: 18px;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  flex-shrink: 0;
  z-index: 3;
`;
const FrameChild3 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 12px;
  height: 12px;
  z-index: 3;
`;
const FrameChild4 = styled.img`
  position: absolute;
  top: 0px;
  left: 20px;
  width: 12px;
  height: 12px;
  z-index: 3;
`;
const FrameChild5 = styled.img`
  position: absolute;
  top: 0px;
  left: 41px;
  width: 12px;
  height: 12px;
  z-index: 3;
`;
const FrameParent = styled.div`
  width: 53px;
  height: 12px;
  position: relative;
`;
const Am5PmMondaySaturdayParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm-7);
`;
const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const FrameParent2 = styled.div`
  width: 239px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
`;
const FrameParent3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-50xl);
  font-size: var(--font-size-smi);
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
    gap: var(--gap-15xl);
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-mid);
  }
`;
const FrameGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  font-size: var(--font-size-lg);
  background-color: #434343;
  color: #fff;
  padding: 20px;
`;
const FrameParent4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0;
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-8xl);
  }
`;
const Desktop2InnerRoot = styled.section`
  width: 1418px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) var(--padding-36xl-8);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-black);
  font-family: var(--font-mulish);
  @media screen and (max-width: 750px) {
    padding-bottom: var(--padding-17xl);
    box-sizing: border-box;
  }
`;

const FrameComponent = ({ className = "" }) => {
  return (
    <Desktop2InnerRoot className={className}>
      <FrameParent4>
        <FrameWrapper>
          <RectangleParent>
            <FrameChild />
            <FrameContainer>
              <SubscribeOurNewsletterParent>
                <SubscribeOurNewsletter>
                  Subscribe Our Newsletter !
                </SubscribeOurNewsletter>
                <VectorWrapper>
                  <FrameItem alt="" src="/vector-151.svg" />
                </VectorWrapper>
                <ElementumExSimilique>
                  Elementum ex similique sollicitudin eveniet sem eveniet proin,
                  iste euismod! Quia! Fugiat molestie leo placerat, tenetur.
                </ElementumExSimilique>
              </SubscribeOurNewsletterParent>
            </FrameContainer>
            <FrameInner alt="" src="/vector-16.svg" />
            <FrameDiv>
              <RectangleGroup>
                <RectangleDiv />
                <RectangleContainer>
                  <FrameChild1 />
                  <Subsribe>SUBSRIBE</Subsribe>
                </RectangleContainer>
              </RectangleGroup>
            </FrameDiv>
          </RectangleParent>
        </FrameWrapper>
        <FrameGroup>
          <QuickLinksUsefulLinksSchooWrapper>
            <QuickLinksUseful>
              Quick LInks 
            </QuickLinksUseful>
            <QuickLinksUseful>
              Useful Links 
            </QuickLinksUseful>
            <QuickLinksUseful>
            School Hours
            </QuickLinksUseful>
          </QuickLinksUsefulLinksSchooWrapper>
          <FrameParent3>
            <VeroTemporMorbiAdipiscingWrapper>
              <VeroTemporMorbi>
                Vero, tempor morbi, adipiscing aliqua nonummy proident
                perferendis? Laboris lacus quidem repellendus quasi.
              </VeroTemporMorbi>
            </VeroTemporMorbiAdipiscingWrapper>
            <FrameComponent1 />
            <FrameComponent1 quicklinks/>
            <FrameParent2>
              <FrameWrapper1>
                <GroupIcon alt="" src="/group-5-3.svg" />
              </FrameWrapper1>
              <FrameParent1>
                <FrameWrapper2>
                  <VectorParent>
                    <VectorIcon alt="" src="/vector-25.svg" />
                    <FrameChild2 loading="lazy" alt="" src="/group-79.svg" />
                  </VectorParent>
                </FrameWrapper2>
                <Am5PmMondaySaturdayParent>
                  <Am>8 AM - 5 PM , Monday - Saturday</Am>
                  <AutQuaeConvallis>
                    Aut, quae convallis minim cum ornare! Pede ut rem, totam
                    dictum convallis.
                  </AutQuaeConvallis>
                  <FrameParent>
                    <FrameChild3 alt="" src="/group-80.svg" />
                    <FrameChild4 alt="" src="/group-81.svg" />
                    <FrameChild5 alt="" src="/group-82.svg" />
                  </FrameParent>
                </Am5PmMondaySaturdayParent>
              </FrameParent1>
            </FrameParent2>
          </FrameParent3>
        </FrameGroup>
      </FrameParent4>
    </Desktop2InnerRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
