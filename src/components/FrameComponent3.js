import styled from "styled-components";
import PropTypes from "prop-types";

const Screenshot161Icon = styled.img`
  align-self: stretch;
  height: 452px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 1;
`;
const Screenshot161Wrapper = styled.div`
  height: 522px;
  width: 255px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Screenshot151Icon = styled.img`
  height: 452px;
  width: 254px;
  position: absolute;
  margin: 0 !important;
  bottom: 70px;
  left: 20px;
  object-fit: cover;
  z-index: 1;
`;
const PhoneMokeup21Icon = styled.img`
  height: 593px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: 2;
`;
const Screenshot151Parent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  min-width: 192px;
`;
const Screenshot171Wrapper = styled.div`
  height: 522px;
  width: 268px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-sm) 0px 0px;
  box-sizing: border-box;
`;
const Screenshot131Icon = styled.img`
  align-self: stretch;
  height: 455px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
  z-index: 1;
`;
const Screenshot131Wrapper = styled.div`
  height: 522px;
  width: 265px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: var(--gap-mini);
`;

const FrameComponent3 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <Screenshot161Wrapper>
        <Screenshot161Icon loading="lazy" alt="" src="/screenshot16-1@2x.png" />
      </Screenshot161Wrapper>
      <Screenshot161Wrapper>
        <Screenshot161Icon loading="lazy" alt="" src="/screenshot14-1@2x.png" />
      </Screenshot161Wrapper>
      <Screenshot151Parent>
        <Screenshot151Icon loading="lazy" alt="" src="/screenshot15-1@2x.png" />
        <PhoneMokeup21Icon alt="" src="/phonemokeup2-1@2x.png" />
      </Screenshot151Parent>
      <Screenshot171Wrapper>
        <Screenshot161Icon loading="lazy" alt="" src="/screenshot17-1@2x.png" />
      </Screenshot171Wrapper>
      <Screenshot131Wrapper>
        <Screenshot131Icon loading="lazy" alt="" src="/screenshot13-1@2x.png" />
      </Screenshot131Wrapper>
    </FrameParentRoot>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
