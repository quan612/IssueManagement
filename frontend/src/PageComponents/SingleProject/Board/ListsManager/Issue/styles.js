import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const IssueContainer = styled.div`
  ${tw` mt-3  border-b cursor-pointer hover:opacity-75 overflow-hidden`}
  display:flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.7rem;
  min-height: 130px;
  width: auto;

  background: ${(props) => (props.theme ? props.theme.card.background : "white")};

  border-radius: 1rem;
  border-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px,
    rgba(0, 0, 0, 0.05) 0px 2px 8px 0px;

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

  margin-top: 0.5rem;
  text-overflow: ellipsis;
  color: ${(props) => (props.theme ? props.theme.card.title : "white")};
  font-weight: 300;
  font-size: 1rem;
  word-wrap: break-word;
  text-align: left;
`;

export const IssueDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;
