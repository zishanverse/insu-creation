import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.img`
  width: 56px;
  height: 3px;
  position: relative;
  z-index: 3;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 2px;
  height: 12px;
  z-index: 3;
`;
const FrameInner = styled.img`
  position: absolute;
  top: 28px;
  left: 0px;
  width: 2px;
  height: 12px;
  z-index: 3;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 60px;
  left: 0px;
  width: 2px;
  height: 12px;
  z-index: 3;
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 89px;
  left: 0px;
  width: 2px;
  height: 12px;
  z-index: 3;
`;
const VectorParent = styled.div`
  width: 2px;
  height: 101px;
  position: relative;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs-9) 0px 0px;
`;
const Home = styled.span`
  display: block;
`;
const HomeAboutUsContainer = styled.p`
  margin: 0;
  height: 116px;
  position: relative;
  line-height: 30px;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  z-index: 3;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-7xs);
`;
const FrameParentRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-18xl) 0px 0px;
  gap: var(--gap-3xl-1);
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-white);
  font-family: var(--font-mulish);
`;

const FrameComponent1 = (props) => {
  return (
    <FrameParentRoot >
      <FrameChild alt="" src="/group-5-3.svg" />
      <FrameWrapper>
        <FrameGroup>
          <FrameContainer>
            <VectorParent>
              <FrameItem alt="" src="/vector-17.svg" />
              <FrameInner alt="" src="/vector-17.svg" />
              <VectorIcon alt="" src="/vector-17.svg" />
              <FrameChild1 alt="" src="/vector-17.svg" />
            </VectorParent>
          </FrameContainer>
          <HomeAboutUsContainer>
            <Home>{props.quicklinks ? 'Help Center' : `Home `}</Home>
            <Home>{props.quicklinks ? 'Contact Us' : `About us`}</Home>
            <Home>{props.quicklinks ? 'FAQ' : `Careers`}</Home>
            <Home>{props.quicklinks ? 'Parent Community' : `News &  Article`}</Home>
          </HomeAboutUsContainer>
        </FrameGroup>
      </FrameWrapper>
    </FrameParentRoot>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
