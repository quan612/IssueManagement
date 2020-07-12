import styled from "styled-components";
import tw from "tailwind.macro";

export const PageContainer = styled.div`
  ${tw` flex content-center justify-center h-full w-full`}
  max-width: 960px;
  margin: auto;
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  top: 300px;
  height: 400px;

  width: 100%;
  position: relative;

  @media only screen and (min-width: 1280px) {
    transform: scale(1.3);
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 667px) {
    /* width:2rem; */
    top: 100px;
    padding: 0.3rem;
  }
`;

export const Panel = styled.div`
  ${tw`flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 shadow-xl rounded-lg bg-gray-800`}
`;

export const UserDetailsWrapper = styled.div`
  height: auto;
  padding: 0.7rem;
`;
