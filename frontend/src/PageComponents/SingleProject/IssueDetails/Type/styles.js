import styled from "styled-components";
import tw from "tailwind.macro";

export const Wrapper = styled.div`
  ${tw`sm:w-full md:w-1/2 lg:w-1/3 mt-2`}
  margin-left: -10px;
`;

export const SelectItemWrapper = styled.div`
  ${tw`sm:w-full md:w-1/2 lg:w-1/3 flex items-center`}
`;

export const SelectItemLabel = styled.div`
  ${tw`ml-1`}
`;
