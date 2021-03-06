import styled from "styled-components";
import tw from "tailwind.macro";

export const Heading = styled.div`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const SelectItemWrapper = styled.div`
  ${tw`flex items-center `}
`;

export const SelectItemLabel = styled.div`
  ${tw` ml-1`}
`;

export const ButtonWrapper = styled.div`
  ${tw`flex justify-end pt-2 my-2 `}
`;
