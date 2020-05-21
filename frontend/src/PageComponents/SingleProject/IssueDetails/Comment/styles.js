import styled from "styled-components";
import tw from "tailwind.macro";

export const FlexContainer = styled.div`
  ${tw`flex`}
`;

export const BoxContainer = styled.div`
  flex: 1 1 auto;
`;

export const Box = styled.div`
  ${tw` ml-2 p-3 `}
  
  background: ${(props) =>
    props.theme.input ? props.theme.input.background : "white"};

  border: 1px solid #264a54;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 1rem;
  }
`;

export const TextAreaContainer = styled.div`
  ${tw`flex w-full ml-2 flex-col`}
`;
