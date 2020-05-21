import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const IssueContainer = styled.div`
  ${tw`rounded mt-3 p-2 border-b cursor-pointer hover:opacity-75`}
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  height: 90px;
  width: auto;

  background: ${(props) =>
    props.theme ? props.theme.card.background : "white"};

  border-color: transparent;

  ${(props) =>
    props.isDragging
      ? css`
          opacity: 0.8;
          border-bottom-color: ${(props) => props.theme.colors.primary};
          border-bottom-width: 2px;
        `
      : ""}
`;

export const IssueTitle = styled.section`
  color: ${(props) => (props.theme ? props.theme.card.title : "white")};
  font-weight: 600;
  overflow: hidden;
`;

export const IssueDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
