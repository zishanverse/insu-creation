import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
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
const Strong = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  top: 10px;
  right: 10px;
  left: 10px;
  border-radius: 50%;
  background-color: var(--color-cadetblue-200);
  height: 62px;
  z-index: 2;
  background-color: ${(p) => p.propBackgroundColor};
`;
const BuildMuscle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-cadetblue-300);
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: ${(p) => p.propBackgroundColor1};
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-cadetblue-100);
  width: 100%;
  height: 100%;
  z-index: 4;
  background-color: ${(p) => p.propBackgroundColor2};
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 11px;
  left: 11px;
  width: 24px;
  height: 24px;
  z-index: 5;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 18px;
  left: 18px;
  width: 46px;
  height: 46px;
`;
const StrongParent = styled.div`
  position: absolute;
  top: 35px;
  left: 35px;
  width: 82px;
  height: 82px;
`;
const ContainerParent = styled.div`
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
const FrameParentRoot = styled.div`align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) 0px var(--padding-smi) var(--padding-128xl);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
  @media screen and (max-width: 750px) {
  padding-left: var(--padding-54xl);
  box-sizing: border-box;
  
  }
  @media screen and (max-width: 450px) {
  padding-left: var(--padding-xl);
  box-sizing: border-box;
  
  }
  align-self: ${(p) => p.propAlignSelf}
  flex: ${(p) => p.propFlex}
`;

const FrameComponent7 = ({
  className = "",
  propAlignSelf,
  propFlex,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
}) => {
  return (
    <FrameParentRoot
      propAlignSelf={propAlignSelf}
      propFlex={propFlex}
      className={className}
    >
      <ContainerParent>
        <Container />
        <StrongParent>
          <Strong propBackgroundColor={propBackgroundColor} />
          <BuildMuscle propBackgroundColor1={propBackgroundColor1} />
          <EllipseParent>
            <FrameChild propBackgroundColor2={propBackgroundColor2} />
            <VectorIcon alt="" src="/vector-8.svg" />
          </EllipseParent>
        </StrongParent>
      </ContainerParent>
      <MakeAProfile>Make A Profile</MakeAProfile>
      <AliquamVariusLigulaNecLeoWrapper>
        <AliquamVariusLigula>
          Aliquam varius ligula nec leo tempus porta. Vestibulum suscipit leo at
          nunc imperdiet, quis lacinia nisi euismod.
        </AliquamVariusLigula>
      </AliquamVariusLigulaNecLeoWrapper>
    </FrameParentRoot>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propBackgroundColor2: PropTypes.any,
};

export default FrameComponent7;
