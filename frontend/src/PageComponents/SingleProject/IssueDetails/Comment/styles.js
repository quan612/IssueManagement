import styled from "styled-components";
import tw from "tailwind.macro";

export const FlexContainer = styled.div`
  ${tw`flex`}
`;

export const BoxContainer = styled.div`
  flex: 1 1 auto;
`;

export const Box = styled.div`
  ${tw` ml-2 p-3 border border-gray-500 text-gray-600`}
`;

export const TextAreaContainer = styled.div`
  ${tw`flex w-full ml-2 flex-col`}
`;
