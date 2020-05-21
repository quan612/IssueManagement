import styled from "styled-components";

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

  background: ${(props) =>
    props.theme.input ? props.theme.input.background : "white"};
  color: ${(props) =>
    props.theme.input ? props.theme.input.textColor : "black"};

  border-radius: 2px;
  /* box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.25); */
  border: 1px solid ${(props) => props.theme.colors.primary};
  outline: none;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
