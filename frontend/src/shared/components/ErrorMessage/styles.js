import styled from "styled-components";
import tw from "tailwind.macro";

export const ErrorContainer = styled.div`
  margin-top: 0.5rem;
  overflow-wrap: break-word;
`;

export const Message = styled.label`
  ${tw`text-red-600 font-bold`}
`;
