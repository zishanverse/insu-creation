import styled from "styled-components";
import PropTypes from "prop-types";

const EasyAndPerfect = styled.p`
  margin: 0;
`;
const EasyAndPerfectContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 40px;
  text-transform: capitalize;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
    line-height: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 24px;
  }
`;
const AliquamAliquetPurus = styled.span`
  display: block;
`;
const AliquamAliquetPurusContainer = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  line-height: 25px;
  text-transform: capitalize;
  display: inline-block;
  max-width: 100%;
  z-index: 3;
`;
const AliquamAliquetPurusAEstCoWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-100);
`;
const EasyAndPerfectSolutionForParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
  max-width: 100%;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
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
  z-index: 4;
`;
const RectangleParent = styled.div`
  width: 198px;
  border-radius: var(--br-31xl);
  background-color: var(--color-black);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-mid) var(--padding-25xl) var(--padding-lg);
  box-sizing: border-box;
  white-space: nowrap;
  z-index: 3;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const FrameParent = styled.div`
  width: 572px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  max-width: 100%;
  @media screen and (max-width: 750px) {
    gap: var(--gap-base);
  }
`;
const Desktop2InnerRoot = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) var(--padding-151xl) var(--padding-539xl);
  box-sizing: border-box;
  max-width: 100%;
  flex-shrink: 0;
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-260xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-left: var(--padding-120xl);
    padding-bottom: var(--padding-91xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const FrameComponent8 = ({ className = "" }) => {
  return (
    <Desktop2InnerRoot className={className}>
      <FrameParent>
        <FrameWrapper>
          <EasyAndPerfectSolutionForParent>
            <EasyAndPerfectContainer>
              <EasyAndPerfect>{`Easy And Perfect Solution For `}</EasyAndPerfect>
              <EasyAndPerfect>Your Business App</EasyAndPerfect>
            </EasyAndPerfectContainer>
            <AliquamAliquetPurusAEstCoWrapper>
              <AliquamAliquetPurusContainer>
                <AliquamAliquetPurus>
                  Aliquam aliquet purus a est consequat lobortis. Etiam vehicula
                  suscipit purus, eget ullamcorper augue blandit vitae. Ut eu
                  euismod felis. Etiam at varius quam. Vivamus lacinia pulvinar
                  turpis in suscipit. Aenean mattis enim ut pretium gravida. Sed
                  fermentum a lacus bibendum convallis.
                </AliquamAliquetPurus>
                <AliquamAliquetPurus>&nbsp;</AliquamAliquetPurus>
                <AliquamAliquetPurus>
                  Consequat purus aliquet a est aliquam lobortis. Etiam vehicula
                  suscipit purus, eget ullamcorper augue blandit vitae....
                </AliquamAliquetPurus>
              </AliquamAliquetPurusContainer>
            </AliquamAliquetPurusAEstCoWrapper>
          </EasyAndPerfectSolutionForParent>
        </FrameWrapper>
        <RectangleParent>
          <FrameChild />
          <ReadMore>Read More</ReadMore>
        </RectangleParent>
      </FrameParent>
    </Desktop2InnerRoot>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
