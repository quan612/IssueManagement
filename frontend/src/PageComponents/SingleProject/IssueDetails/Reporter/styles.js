import styled from "styled-components";
import tw from "tailwind.macro";
import { SelectBackgroundStyled } from "shared/components/styles";

export const Container = styled(SelectBackgroundStyled)`
  ${tw`rounded shadow `}
`;

export const Wrapper = styled.div`
  ${tw`flex items-center px-1 `}
  font-size: inherit;
  min-height: 2.5rem;
`;
