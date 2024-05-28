import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.img`
  height: 781.5px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: 1;
`;
const PinkHeaderBg1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 489px;
  width: 897px;
  height: 649px;
  object-fit: contain;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 138px;
  left: 1303px;
  width: 20px;
  height: 16px;
  z-index: 2;
`;
const FirstTimerOffer = styled.img`
  position: absolute;
  top: 101px;
  left: 1303px;
  width: 20px;
  height: 20px;
  z-index: 2;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 169px;
  left: 1303px;
  width: 20px;
  height: 20px;
  z-index: 2;
`;
const MarginIcon = styled.img`
  position: absolute;
  top: 198px;
  left: 1312px;
  width: 1px;
  height: 42px;
  z-index: 2;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 643px;
  left: 236px;
  width: 1247px;
  height: 1518px;
  object-fit: contain;
  z-index: 2;
`;
const ItemmarginIcon = styled.img`
  position: absolute;
  top: 1013px;
  left: 107px;
  width: 312.7px;
  height: 482.6px;
  z-index: 3;
`;
const ContainerIcon = styled.img`
  position: absolute;
  top: 1016px;
  left: 502px;
  width: 312.7px;
  height: 482.6px;
  z-index: 3;
`;
const Girl1Icon = styled.img`
  position: absolute;
  top: 736px;
  left: 1114px;
  width: 167px;
  height: 206px;
  object-fit: contain;
  z-index: 3;
`;
const LinkIcon = styled.img`
  position: absolute;
  top: 1016px;
  left: 888px;
  width: 312.7px;
  height: 482.6px;
  z-index: 3;
`;
const Zas1Icon = styled.img`
  position: absolute;
  top: 1899.1px;
  left: 228.7px;
  width: 342px;
  height: 306px;
  object-fit: contain;
  z-index: 3;
`;
const RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 1707px;
  left: 46px;
  width: 500px;
  height: 500px;
  object-fit: contain;
  z-index: 4;
`;
const Xc21Icon = styled.img`
  position: absolute;
  top: 1661px;
  left: 0px;
  width: 145px;
  height: 154px;
  object-fit: contain;
  z-index: 5;
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 1798px;
  left: 654px;
  width: 188px;
  height: 4px;
  z-index: 3;
`;
const Dsd21Icon = styled.img`
  position: absolute;
  top: 860px;
  left: 631px;
  width: 104px;
  height: 16px;
  object-fit: contain;
  z-index: 4;
`;
const PinkHeaderBg1Parent = styled.div`
  height: 2207px;
  width: 1386px;
  position: absolute;
  margin: 0 !important;
  right: 31px;
  bottom: -1467px;
`;
const FrameParentRoot = styled.section`
  width: 1471px;
  margin: 0 !important;
  position: absolute;
  top: -41.5px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

const FrameComponent12 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameChild alt="" src="/group-2@2x.png" />
      <PinkHeaderBg1Parent>
        <PinkHeaderBg1Icon alt="" src="/pinkheaderbg-1@2x.png" />
        <VectorIcon loading="lazy" alt="" src="/vector.svg" />
        <FirstTimerOffer alt="" src="/vector-1.svg" />
        <FrameItem loading="lazy" alt="" src="/group-4.svg" />
        <MarginIcon alt="" src="/margin.svg" />
        <FrameInner alt="" src="/group-63@2x.png" />
        <ItemmarginIcon alt="" src="/itemmargin.svg" />
        <ContainerIcon alt="" src="/itemmargin.svg" />
        <Girl1Icon loading="lazy" alt="" src="/girl-1@2x.png" />
        <LinkIcon alt="" src="/itemmargin.svg" />
        <Zas1Icon alt="" src="/zas-1@2x.png" />
        <RemovebgPreview1Icon alt="" src="/4667617removebgpreview-1@2x.png" />
        <Xc21Icon alt="" src="/xc2-1@2x.png" />
        <FrameChild1 loading="lazy" alt="" src="/vector-13.svg" />
        <Dsd21Icon loading="lazy" alt="" src="/dsd2-1@2x.png" />
      </PinkHeaderBg1Parent>
    </FrameParentRoot>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
