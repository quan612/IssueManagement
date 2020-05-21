import styled from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.div`
  ${tw`w-full hover:cursor-pointer my-3 pb-2`}

  height: 2.3rem;
`;

export const Bar = styled.div`
  width: 100%;
  height: 9px;
  background: ${(props) =>
    props.theme.input ? props.theme.input.background : "white"};
  border-radius: 10px;

  &:hover {
    opacity: 0.5;
  }
`;

export const Progress = styled.div`
  display: inline-block;
  height: 7px;
  width: ${(props) => props.children};
  background-color: ${(props) => props.theme.colors.primary};
  color: transparent;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;
