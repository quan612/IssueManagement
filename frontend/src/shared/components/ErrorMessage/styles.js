import styled from "styled-components";
import tw from "tailwind.macro";

export const ErrorContainer = styled.div`
  margin-top: 1rem;
`;

export const Message = styled.label`
  ${tw`text-red-600 text-sm font-bold`}
`;
