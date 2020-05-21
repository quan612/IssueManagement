import styled from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.div`
  ${tw`w-full px-4`}
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.div`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const BackIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 350px;
`;
