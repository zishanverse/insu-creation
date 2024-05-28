import styled from "styled-components";
import PropTypes from "prop-types";

const AppScreenshots = styled.h1`
  margin: 0;
  position: relative;
  font-size: inherit;
  line-height: 40px;
  text-transform: capitalize;
  font-weight: 600;
  font-family: inherit;
  z-index: 1;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
    line-height: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 24px;
  }
`;
const Dsd22Icon = styled.img`
  height: 16px;
  width: 104px;
  position: relative;
  object-fit: cover;
  z-index: 1;
`;
const Dsd22Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-58xl);
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const AppScreenshotsParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-smi);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-11xl) 0px var(--padding-xl);
`;
const SaepeQuoLabore = styled.p`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-base);
  line-height: 20px;
  text-transform: capitalize;
  color: var(--color-darkolivegreen);
  z-index: 1;
`;
const FrameParent = styled.div`
  width: 498px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
`;
const FrameWrapperRoot = styled.div`
  width: 1374px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) var(--padding-5xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;

const FrameComponent4 = ({ className = "" }) => {
  return (
    <FrameWrapperRoot className={className}>
      <FrameParent>
        <FrameContainer>
          <AppScreenshotsParent>
            <AppScreenshots>App Screenshots</AppScreenshots>
            <Dsd22Wrapper>
              <Dsd22Icon loading="lazy" alt="" src="/dsd2-1@2x.png" />
            </Dsd22Wrapper>
          </AppScreenshotsParent>
        </FrameContainer>
        <SaepeQuoLabore>
          Saepe quo labore aenean dictumst expedita commodi auctor, nisl, lorem
          iusto feugiat nemo reiciendis laboris.
        </SaepeQuoLabore>
      </FrameParent>
    </FrameWrapperRoot>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
