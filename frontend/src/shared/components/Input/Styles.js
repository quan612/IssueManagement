import styled, { css } from "styled-components";
import tw from "tailwind.macro";
import { color } from "shared/utils/styles";

export const InputContainer = styled.div`
  ${tw`cursor-pointer relative inline-block w-full `}
`;

export const StyledInput = styled.input`
  ${tw`w-full h-full shadow appearance-none rounded bg-white border pb-1 px-2 text-gray-700 outline-none focus:outline-none`}
  height: 2.5rem;

  &:hover,
  &:focus {
    border-bottom-width: 2px;
    border-bottom-color: ${color.primary};
    outline: none;
  }

  ${(props) =>
    props.invalid &&
    css`
      & {
        border-bottom-color: ${color.danger};
        border-bottom-width: 1px;
      }

      &:hover,
      &:focus {
        border-bottom-color: ${color.danger};
        border-bottom-width: 2px;
      }
    `}

  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
`;
