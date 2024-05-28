import styled from "styled-components";
import PropTypes from "prop-types";

const Sa1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 128px;
  height: 411px;
  object-fit: contain;
`;
const FreelanceManIsWorkingRemovIcon = styled.img`
  position: absolute;
  top: 35px;
  left: 69px;
  width: 500px;
  height: 500px;
  object-fit: contain;
  z-index: 1;
`;
const Sa1Parent = styled.div`
  height: 535px;
  flex: 1;
  position: relative;
  min-width: 370px;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const DesignedWorked = styled.p`
  margin: 0;
`;
const DesignedWorkedContainer = styled.h1`
  margin: 0;
  position: relative;
  font-size: var(--font-size-11xl);
  line-height: 45px;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
    line-height: 36px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
    line-height: 27px;
  }
`;
const FrameChild = styled.div`
  height: 54px;
  width: 538px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: var(--br-7xs);
  background-color: var(--color-paleturquoise);
  display: none;
  max-width: 100%;
`;
const AliquamVariusLigula = styled.p`
  margin: 0;
  position: relative;
  line-height: 45px;
  font-weight: 500;
  z-index: 4;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 36px;
  }
`;
const RectangleParent = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: var(--br-7xs);
  background-color: var(--color-paleturquoise);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-5xl) var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 3;
`;
const Sa11Icon = styled.img`
  height: 489px;
  width: 182px;
  position: absolute;
  margin: 0 !important;
  top: -187px;
  right: -31px;
  object-fit: cover;
  z-index: 1;
`;
const FrameItem = styled.div`
  height: 151px;
  width: 538px;
  position: relative;
  box-shadow: 0px 5px 5px -1px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px var(--br-8xs) var(--br-8xs);
  background-color: var(--color-white);
  display: none;
  max-width: 100%;
`;
const LoremIpsumIsSimply = styled.p`
  margin: 0;
  flex: 1;
  position: relative;
  line-height: 20px;
  display: inline-block;
  max-width: 100%;
  z-index: 3;
`;
const RectangleGroup = styled.div`
  flex: 1;
  box-shadow: 0px 5px 5px -1px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px var(--br-8xs) var(--br-8xs);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl) var(--padding-mid) var(--padding-lgi);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 2;
`;
const Sa11Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  margin-top: -19px;
  font-size: var(--font-size-sm);
  color: var(--color-dimgray-100);
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const SuspendisseVitaeVarius = styled.p`
  margin: 0;
  position: relative;
  line-height: 45px;
  font-weight: 500;
  z-index: 3;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 36px;
  }
`;
const RectangleContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: var(--br-7xs);
  background-color: var(--color-paleturquoise);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-4xl) var(--padding-9xs)
    var(--padding-5xl);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 2;
`;
const FrameDiv = styled.div`
  align-self: stretch;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  border-radius: var(--br-7xs);
  background-color: var(--color-paleturquoise);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-5xl) var(--padding-9xs);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 2;
`;
const DesignedWorkedByTheLatesParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base-3);
  max-width: 100%;
`;
const FrameContainer = styled.div`
  width: 538px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-27xl) 0px 0px;
  box-sizing: border-box;
  min-width: 538px;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    padding-top: var(--padding-11xl);
    box-sizing: border-box;
    min-width: 100%;
  }
`;
const FrameParent = styled.div`
  width: 1184px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-58xl);
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    gap: var(--gap-19xl);
  }
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-lgi);
  }
`;
const FrameWrapperRoot = styled.div`
  width: 1378px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;

const FrameComponent5 = ({ className = "" }) => {
  return (
    <FrameWrapperRoot className={className}>
      <FrameParent>
        <Sa1Parent>
          <Sa1Icon alt="" src="/sa-1@2x.png" />
          <FreelanceManIsWorkingRemovIcon
            loading="lazy"
            alt=""
            src="/freelancemanisworkingremovebgpreview-1@2x.png"
          />
        </Sa1Parent>
        <FrameContainer>
          <DesignedWorkedByTheLatesParent>
            <DesignedWorkedContainer>
              <DesignedWorked>{`Designed & Worked By The Latest `}</DesignedWorked>
              <DesignedWorked>Partners</DesignedWorked>
            </DesignedWorkedContainer>
            <FrameGroup>
              <RectangleParent>
                <FrameChild />
                <AliquamVariusLigula>
                  Aliquam varius ligula nec leo tempus porta.
                </AliquamVariusLigula>
              </RectangleParent>
              <Sa11Parent>
                <Sa11Icon loading="lazy" alt="" src="/sa1-1@2x.png" />
                <RectangleGroup>
                  <FrameItem />
                  <LoremIpsumIsSimply>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                  </LoremIpsumIsSimply>
                </RectangleGroup>
              </Sa11Parent>
            </FrameGroup>
            <RectangleContainer>
              <FrameChild />
              <SuspendisseVitaeVarius>
                Suspendisse vitae varius diam, a vulputate urna.
              </SuspendisseVitaeVarius>
            </RectangleContainer>
            <FrameDiv>
              <FrameChild />
              <SuspendisseVitaeVarius>
                Aliquam aliquet purus eget lacus pretium.
              </SuspendisseVitaeVarius>
            </FrameDiv>
          </DesignedWorkedByTheLatesParent>
        </FrameContainer>
      </FrameParent>
    </FrameWrapperRoot>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
