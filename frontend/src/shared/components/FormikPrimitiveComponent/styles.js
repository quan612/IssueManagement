import styled from "styled-components";
import tw from "tailwind.macro";

export const Section = styled.div`
  margin-top: 1rem;
`;

export const Label = styled.label`
  ${tw`block text-gray-600 text-sm font-bold mb-2`}
`;

export const Error = styled.p`
  ${tw`text-red-500 text-sm font-bold `}
  margin-top:2px;
`;
