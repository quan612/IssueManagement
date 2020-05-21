import styled from "styled-components";
import tw from "tailwind.macro";

export const EmptyLabel = styled.div`
  ${tw`cursor-pointer w-full py-2 px-2 rounded text-gray-700 leading-tight `}
  transition: background-color 0.1s ease-in-out;
  margin-left: -4px;
  height: 135px;
  background: ${(props) =>
    props.theme.input ? props.theme.input.background : "white"};

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 12px;
  & > button {
    margin-right: 6px;
  }
`;

export const ContentEditable = styled.div`
  min-height: 100px;
  white-space: pre-line;
  padding: 5px;
  border: 1px solid transparent;
  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 1rem;
  }
`;
