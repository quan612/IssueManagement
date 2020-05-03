import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const TextAreaContainer = styled.div`
  display: inline-block;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  margin: 0;
  resize: vertical;
  height: ${(props) => (props.height ? props.height : "100px")};
  padding: 0.5em;
  font-size: 14px;
  color: #060628;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.25);
  border: 1px solid #dfdfe6;
  outline: none;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px #0b45d9;
  }
`;
// overflow y hidden for not having scroll in case title is long
