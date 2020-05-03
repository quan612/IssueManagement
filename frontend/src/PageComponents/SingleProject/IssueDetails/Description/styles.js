import styled from "styled-components";
import tw from "tailwind.macro";

export const EmptyLabel = styled.div`
  ${tw`cursor-pointer w-full py-2 px-2 rounded bg-white text-gray-700 leading-tight hover:bg-gray-200 `}
  transition: background-color 0.2s ease-in-out;
  margin-left: -8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 12px;
  & > button {
    margin-right: 6px;
  }
`;

export const ContentEditable = styled.div`
  white-space: pre-line;
  ${tw`hover:cursor-pointer hover:bg-gray-100`}
`;
