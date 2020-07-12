import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const IssueContainer = styled.div`
  ${tw`rounded mt-3 p-2 border-b cursor-pointer hover:opacity-75`}
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  height: 95px;
  width: auto;

  background: ${(props) => (props.theme ? props.theme.card.background : "white")};

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

export const IssueTitle = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => (props.theme ? props.theme.card.title : "white")};
  font-weight: 600;
  word-wrap: break-word;
  text-align: left;
`;

export const IssueDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
