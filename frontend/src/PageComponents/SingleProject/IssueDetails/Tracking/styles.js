import styled from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.div`
  ${tw`w-full hover:cursor-pointer hover:bg-gray-200 py-2`}

  height: 2.3rem;
`;

export const Bar = styled.div`
  width: 100%;
  height: 7px;
  background-color: lightgray;
  border-radius: 10px;
`;

export const Progress = styled.div`
  display: inline-block;
  height: 7px;
  width: ${props => props.children};
  background-color: green;
  color: transparent;
  border-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;
