import styled from "styled-components";
import tw from "tailwind.macro";

export const FlexColContainer = styled.div`
  ${tw`flex flex-col p-1`}
`;

export const FlexRowContainer = styled.div`
  ${tw`flex  p-1`}
`;

export const Left = styled.div`
  width: 65%;
  padding-right: 15px;
`;

export const Right = styled.div`
  width: 35%;
  padding-top: 5px;
`;
