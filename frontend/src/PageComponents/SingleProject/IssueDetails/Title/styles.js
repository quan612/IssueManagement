import styled from "styled-components";
import tw from "tailwind.macro";

export const Wrapper = styled.div`
  ${tw`mt-3`}
`;

export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  padding: 4px;
  line-height: 1.25;
  border: 1px solid transparent;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
