import styled from "styled-components";
import tw from "tailwind.macro";

export const Section = styled.div`
  margin-top: 1rem;
`;

//block
export const Label = styled.label`
  ${tw`text-gray-600 font-bold mb-2`}
`;

export const Error = styled.p`
  ${tw`text-red-500 font-bold `}
  margin-top:2px;
`;
