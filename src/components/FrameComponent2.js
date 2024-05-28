import styled from "styled-components";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const VectorIcon = styled.img`
  height: 39px;
  width: 22px;
  position: absolute;
  margin: 0 !important;
  top: 114px;
  left: 0px;
  object-fit: contain;
  z-index: 2;
`;
const VectorIcon1 = styled.img`
  height: 39px;
  width: 22px;
  position: absolute;
  margin: 0 !important;
  right: 0px;
  bottom: 123px;
  z-index: 2;
`;
const VectorParent = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-45xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-29xl);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-13xl);
    padding-right: var(--padding-13xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-5xl);
  }
`;
const Desktop2InnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-base) var(--padding-89xl) 0px;
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-dimgray-300);
  font-family: var(--font-poppins);
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-51xl);
    box-sizing: border-box;
  }
`;

const FrameComponent2 = ({ className = "" }) => {
  return (
    <Desktop2InnerRoot className={className}>
      <VectorParent>
        <VectorIcon alt="" src="/vector-131.svg" />
        <GroupComponent />
        <GroupComponent />
        <VectorIcon1 alt="" src="/vector-14.svg" />
      </VectorParent>
    </Desktop2InnerRoot>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
