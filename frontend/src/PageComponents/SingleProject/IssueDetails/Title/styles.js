import styled from "styled-components";
import tw from "tailwind.macro";
import { TextArea } from "shared/components/TextArea";

export const Wrapper = styled.div`
  ${tw`mt-3`}
`;

export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  padding: 7px 7px 8px;
  line-height: 1.25;
  border: none;

  ${tw`hover:cursor-pointer hover:bg-gray-100 `}
`;

export const ErrorContainer = styled.div`
  ${tw`pt-2 text-red-500 `}
`;
