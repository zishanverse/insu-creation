import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  width: 500px;
  height: 306px;
  position: relative;
  box-shadow: 0px 0px 15px rgba(101, 184, 125, 0.28);
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  display: none;
  max-width: 100%;
`;
const PerSedMattis = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  line-height: 20px;
  text-transform: capitalize;
  display: inline-block;
  max-width: 100%;
  z-index: 1;
`;
const PerSedMattisIntegerViverWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-9xs) 0px var(--padding-xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const InvertedCommasTop1Icon = styled.img`
  width: 66px;
  height: 63px;
  position: relative;
  object-fit: contain;
  z-index: 1;
`;
const InvertedCommasTop1Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-smi) var(--padding-5xl) 0px;
`;
const Aro1Icon = styled.img`
  align-self: stretch;
  height: 61px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 1;
`;
const Aro1Wrapper = styled.div`
  height: 129px;
  width: 83px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const JennyWilson = styled.b`
  position: relative;
  line-height: 20px;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  min-width: 95px;
  z-index: 1;
`;
const VectorIcon = styled.img`
  height: 10px;
  width: 10px;
  position: relative;
  min-height: 10px;
  z-index: 1;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  top: 0px;
  left: 14px;
  width: 10px;
  height: 10px;
  z-index: 1;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 10px;
  height: 10px;
  z-index: 1;
`;
const VectorGroup = styled.div`
  height: 10px;
  width: 24px;
  position: relative;
`;
const VectorParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs-3);
`;
const JennyWilsonParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-smi) var(--padding-13xl) 0px;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 0px;
  left: 4.5px;
  width: 23px;
  height: 21px;
  z-index: 1;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-lavender);
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  width: calc(100% - 14px);
  top: 7px;
  right: 7px;
  left: 7px;
  max-width: 100%;
  overflow: hidden;
  height: 78px;
  object-fit: contain;
  z-index: 3;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 8px;
  left: 0px;
  width: 92px;
  height: 92px;
`;
const VectorContainer = styled.div`
  height: 100px;
  width: 92px;
  position: relative;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-mini);
  max-width: 100%;
  color: var(--color-black);
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const RectangleParentRoot = styled.div`
  flex: 1;
  box-shadow: 0px 0px 15px rgba(101, 184, 125, 0.28);
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-36xl) var(--padding-17xl) var(--padding-19xl);
  box-sizing: border-box;
  gap: var(--gap-9xs);
  min-width: 325px;
  max-width: 100%;
  z-index: 2;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-dimgray-300);
  font-family: var(--font-poppins);
`;

const GroupComponent = ({ className = "" }) => {
  return (
    <RectangleParentRoot className={className}>
      <FrameChild />
      <PerSedMattisIntegerViverWrapper>
        <PerSedMattis>
          Per sed, mattis. Integer viverra euismod maecenas incidunt, phasellus
          consequatur aliquam nihil temporibus in assumenda? Aute praesentium
          fugiat. Perspiciatis, ultrices deserunt convallis, eius at non.
        </PerSedMattis>
      </PerSedMattisIntegerViverWrapper>
      <FrameParent>
        <InvertedCommasTop1Wrapper>
          <InvertedCommasTop1Icon
            loading="lazy"
            alt=""
            src="/invertedcommastop-1@2x.png"
          />
        </InvertedCommasTop1Wrapper>
        <Aro1Wrapper>
          <Aro1Icon loading="lazy" alt="" src="/aro-1@2x.png" />
        </Aro1Wrapper>
        <FrameWrapper>
          <JennyWilsonParent>
            <JennyWilson>Jenny Wilson</JennyWilson>
            <VectorParent>
              <VectorIcon alt="" src="/vector-15.svg" />
              <VectorIcon alt="" src="/vector-15.svg" />
              <VectorIcon alt="" src="/vector-15.svg" />
              <VectorGroup>
                <VectorIcon1 alt="" src="/vector-18.svg" />
                <VectorIcon2 alt="" src="/vector-18.svg" />
              </VectorGroup>
            </VectorParent>
          </JennyWilsonParent>
        </FrameWrapper>
        <VectorContainer>
          <FrameItem alt="" src="/vector-14.svg" />
          <EllipseParent>
            <FrameInner />
            <MaskGroupIcon loading="lazy" alt="" src="/mask-group@2x.png" />
          </EllipseParent>
        </VectorContainer>
      </FrameParent>
    </RectangleParentRoot>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
