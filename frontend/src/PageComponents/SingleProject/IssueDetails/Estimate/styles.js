import styled from "styled-components";
import tw from "tailwind.macro";

export const EstimateContainer = styled.div`
  ${tw`hover:cursor-pointer w-full flex items-center `}

  min-height:2.5rem;
  font-size: 1.1rem;

  border: 1px solid transparent;
  &:hover {
    background: ${(props) => (props.theme.input ? props.theme.input.background : "white")};
    border: 1px solid #264a54;
  }
`;
