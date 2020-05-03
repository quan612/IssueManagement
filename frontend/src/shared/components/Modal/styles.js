import styled from "styled-components";
import tw from "tailwind.macro";

export const Wrapper = styled.div`
  ${tw`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
`;

export const OverlayContainer = styled.div`
  ${tw`absolute w-full h-full bg-gray-900 opacity-50`}
`;

export const ModalContainer = styled.div`
  ${tw`bg-white w-11/12 sm:w-11/12 md:w-11/12 lg:w-1/2 mx-auto relative rounded shadow-lg z-40`}
  min-width: 1024px;
  min-height: 700px;

  max-width: 1280px;
`;

export const ModalContent = styled.div`
  ${tw`text-left py-2 px-5`}
`;
