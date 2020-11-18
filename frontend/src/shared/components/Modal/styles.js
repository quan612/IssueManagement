import styled from "styled-components";
import tw from "tailwind.macro";
import { CardBackgroundStyled } from "shared/components/styles";

export const Wrapper = styled.div`
  ${tw`overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none`}

  height: 100%;
  width: 100%;
  position: fixed;
  transform: scale3d(1, 1, 1);
  z-index: 990;

  margin: auto;
  display: flex;
`;

export const OverlayContainer = styled.div`
  min-height: 100%;
  background: rgba(9, 30, 66, 0.54);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 0 50px;
`;

export const ModalContainer = styled(CardBackgroundStyled)`
  ${tw` mx-auto relative rounded shadow-lg z-40`}

  max-height: calc(100% - 72px);
  width: 100%;
  max-width: 1024px;
  overflow-y: auto;

  background-color: ${(props) => props.theme.colors.backgroundLight}; // #eeeef2
  @media only screen and (min-device-width: 360px) and (max-device-width: 667px) {
    top: 17rem;
    font-size: 0.9rem;
    margin: 0;
  }
`;

export const ModalContent = styled.div`
  ${tw`text-left`}
`;
