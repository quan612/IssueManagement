import styled from "styled-components";
import tw from "tailwind.macro";

export const FlexContainer = styled.div`
  ${tw`flex`}
`;

export const BoxContainer = styled.div`
  flex: 1 1 auto;
`;

export const Box = styled.div`
  ${tw`p-3 `}

  background: ${(props) => (props.theme.input ? props.theme.input.background : "white")};
  border: 1px solid #dce2e6;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 4px;
  }
`;

export const TextAreaContainer = styled.div`
  ${tw`flex w-full ml-2 flex-col`}
`;
