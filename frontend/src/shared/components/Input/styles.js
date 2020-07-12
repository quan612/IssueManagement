import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const InputContainer = styled.div`
  ${tw`cursor-pointer relative inline-block w-full `}
`;

export const StyledInput = styled.input`
  ${tw`w-full h-full shadow appearance-none rounded  px-2 outline-none focus:outline-none`}
  min-height:2.5rem;
  font-size: inherit;

  background: ${(props) => (props.theme.input ? props.theme.input.background : "white")};
  color: ${(props) => (props.theme.input ? props.theme.input.textColor : "black")};
  border: 1px solid ${(props) => props.theme.colors.borderNotFocused};

  &:hover,
  &:focus {
    border-bottom-width: 2px;
    border-bottom-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }

  &::placeholder {
    color: ${(props) => (props.theme.input ? props.theme.input.textColor : "black")};
    opacity: 1;
  }

  ${(props) =>
    props.invalid &&
    css`
      & {
        border-bottom-color: ${(props) => props.theme.colors.danger};
        border-bottom-width: 1px;
      }

      &:hover,
      &:focus {
        border-bottom-color: ${(props) => props.theme.colors.danger};
        border-bottom-width: 2px;
      }
    `}

  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;
