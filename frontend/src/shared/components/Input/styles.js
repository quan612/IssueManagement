import styled, { css } from "styled-components";
import tw from "tailwind.macro";

export const InputContainer = styled.div`
  ${tw`cursor-pointer relative inline-block w-full `}
`;

export const StyledInput = styled.input`
  ${tw` h-full appearance-none rounded px-2 outline-none focus:outline-none`}
  min-height:2.5rem;
  font-size: inherit;
  background-color: ${(props) => (props.theme.input ? props.theme.input.background : "white")};
  color: ${(props) => (props.theme.input ? props.theme.input.textColor : "black")};
  border: 1px solid ${(props) => (props.theme.input ? props.theme.input.borderColor : "black")};
  width: 100%;

  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  &:hover,
  &:focus {
    border-bottom-width: 1px;
    border-bottom-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }

  &::placeholder {
    color: ${(props) => (props.theme.input ? props.theme.input.placeHolder : "black")};
    opacity: 1;
  }

  ${(props) => props.icon !== undefined && `padding-left: 50px !important;`}

  ${(props) =>
    props.invalid &&
    css`
      & {
        border-bottom-color: ${(props) => props.theme.colors.danger};
        border-bottom-width: 1px;
        background-color: ${(props) => props.theme.colors.backgroundInvalid};
      }

      &:hover,
      &:focus {
        border-bottom-color: ${(props) => props.theme.colors.danger};
        border-bottom-width: 1px;
        opacity: 0.9;
      }
    `}

  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 10px;
  left: 12px;
  pointer-events: none;

  &:after {
    content: "";
    position: absolute;
    right: -11px;
    top: -10px;
    bottom: -10px;
    width: 1px;
    opacity: 0.5;
    background-color: rgba(212, 212, 212, 0);
    background-image: linear-gradient(
      to top,
      rgba(212, 212, 212, 0) 0,
      #8b8484 30%,
      #d4d4d4 70%,
      rgba(212, 212, 212, 0) 100%
    );
  }
`;
