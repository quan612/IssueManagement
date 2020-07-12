import styled from "styled-components";
import tw from "tailwind.macro";
import { CardBackgroundStyled } from "shared/components/styles";

export const Wrapper = styled.div`
  ${tw`flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
  top:52px;
`;

export const OverlayContainer = styled.div`
  ${tw`absolute w-full h-full bg-gray-900`}
  opacity:0.9;
`;

export const ModalContainer = styled(CardBackgroundStyled)`
  ${tw`sm:w-full md:w-full lg:w-1/2 mx-auto relative rounded shadow-lg z-40`}

  @media only screen and (min-device-width: 360px) 
  and (max-device-width: 667px) {
    top: 17rem;
    font-size: 0.9rem;
    margin: 0;
  }
`;

export const ModalContent = styled.div`
  ${tw`text-left py-2 px-5`}
`;
