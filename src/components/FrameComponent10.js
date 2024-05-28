import styled from "styled-components";
import PropTypes from "prop-types";

const PerfectUiDesign = styled.h2`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 25px;
  text-transform: capitalize;
  font-weight: 500;
  font-family: inherit;
  z-index: 5;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 20px;
  }
  color: ${(p) => p.propColor};
`;
const PerfectUiDesignWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-16xl) 0px var(--padding-14xl);
  padding: ${(p) => p.propPadding};
`;
const PraesentAcVehicula = styled.p`margin: 0;
  width: 263px;
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 20px;
  text-transform: capitalize;
  color: var(--color-black);
  text-align: center;
  display: inline-block;
  z-index: 6;
  width: ${(p) => p.propWidth1}
  display: ${(p) => p.propDisplay}
  align-self: ${(p) => p.propAlignSelf}
`;
const ItemIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  z-index: 4;
`;
const TabIcon = styled.img`
  width: 100%;
  height: 100%;
  z-index: 5;
  object-fit: contain;
  position: absolute;
  left: 0px;
  top: 0px;
  transform: scale(1.15);
`;
const WrapperTab = styled.div`
  position: absolute;
  top: 291px;
  left: 43px;
  width: 100px;
  height: 132px;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const GetRewarded = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-white);
  border: 0px solid var(--color-honeydew);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 5;
  border: ${(p) => p.propBorder};
`;
const Content1Icon = styled.img`
  position: absolute;
  top: 48px;
  left: 48px;
  width: 78px;
  height: 78px;
  object-fit: contain;
  z-index: 6;
`;
const GetRewardedParent = styled.div`
  position: absolute;
  top: 36px;
  left: 69px;
  width: 174px;
  height: 174px;
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-black);
  width: 100%;
  height: 100%;
  z-index: 6;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 14px;
  width: 22px;
  height: 11px;
  z-index: 7;
`;
const ContainerParent = styled.div`
  position: absolute;
  top: 408px;
  left: 129px;
  width: 49px;
  height: 49px;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 300px;
  left: 108px;
  width: 98px;
  height: 3px;
  z-index: 6;
`;
const ItemParent = styled.div`width: calc(100% - 15px);
  height: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 15px;
  bottom: 0px;
  left: 0px;
  width: ${(p) => p.propWidth2}
  right: ${(p) => p.propRight}
`;
const FrameParentRoot = styled.div`
  width: 327.7px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-239xl) var(--padding-5xl) var(--padding-81xl-6);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-19xl);
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-gray-300);
  font-family: var(--font-poppins);
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-149xl);
    padding-bottom: var(--padding-46xl);
    box-sizing: border-box;
  }
  width: ${(p) => p.propWidth};
`;

const FrameComponent10 = ({
  className = "",
  item,
  tab,
  propWidth,
  propPadding,
  propColor,
  propWidth1,
  propDisplay,
  propAlignSelf,
  propWidth2,
  propRight,
  propBorder,
}) => {
  return (
    <FrameParentRoot propWidth={propWidth} className={className}>
      <PerfectUiDesignWrapper propPadding={propPadding}>
        <PerfectUiDesign propColor={propColor}>
          Perfect UI Design
        </PerfectUiDesign>
      </PerfectUiDesignWrapper>
      <PraesentAcVehicula
        propWidth1={propWidth1}
        propDisplay={propDisplay}
        propAlignSelf={propAlignSelf}
      >
        Praesent ac vehicula sapien. Sed sollicitudin molestie consequat. Ut
        vitae ante ut mi vehicula vulputate.
      </PraesentAcVehicula>
      <ItemParent propWidth2={propWidth2} propRight={propRight}>
        <ItemIcon alt="" src={item} />
        <WrapperTab>
          <TabIcon alt="" src={tab} />
        </WrapperTab>
        <GetRewardedParent>
          <GetRewarded propBorder={propBorder} />
          <Content1Icon loading="lazy" alt="" src="/content-1@2x.png" />
        </GetRewardedParent>
        <ContainerParent>
          <Container />
          <VectorIcon alt="" src="/vector-3.svg" />
        </ContainerParent>
        <FrameChild alt="" src="/group-5.svg" />
      </ItemParent>
    </FrameParentRoot>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
  item: PropTypes.string,
  tab: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propColor: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth2: PropTypes.any,
  propRight: PropTypes.any,
  propBorder: PropTypes.any,
};

export default FrameComponent10;
