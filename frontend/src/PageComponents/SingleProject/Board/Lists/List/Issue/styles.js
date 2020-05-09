import styled, { css } from "styled-components";

import tw from "tailwind.macro";

export const StyledIssue = styled.div`
  ${tw`rounded bg-white mt-2 p-2 border-b cursor-pointer hover:opacity-75`}
  /* background-color:${(props) => (props.isDragging ? "indigo" : "white")} */
  height: 100px;
  width: auto;

  ${(props) =>
    props.isDragging
      ? css`
          background-color: lightblue;
        `
      : ""}
    
`;
