import styled from "styled-components";
import tw from "tailwind.macro";
import { SelectBackgroundStyled } from "shared/components/styles";

export const Container = styled(SelectBackgroundStyled)`
  ${tw`rounded shadow `}
`;

export const Wrapper = styled.div`
  ${tw`flex items-center px-2 py-2`}
  font-size: 1.1rem;
`;
