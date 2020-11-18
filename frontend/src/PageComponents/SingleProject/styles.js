import styled from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.div`
  ${tw`w-full px-4`}
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const Heading = styled.div`
  color: ${(props) => props.theme.colors.textPrimary};
  ${tw`text-center text-lg font-bold lg:text-4xl`}
`;
