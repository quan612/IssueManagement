import styled, { css } from "styled-components";
import tw from "tailwind.macro";

const variant = {
  "primary-outline": css`
    background: "transparent";
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
  `,
  "secondary-outline": tw`bg-transparent text-gray-700 hover:bg-gray-500 hover:text-white border-transparent `,

  primary: css`
    background: ${(props) => props.theme.colors.primary};
    color: white;
    border: 1px solid ${(props) => props.theme.colors.primary};
  `,

  secondary: tw`bg-gray-200 text-gray-700 hover:bg-gray-400 `,
  info: tw`bg-black text-white hover:bg-gray-900`,
};

export const StyledButton = styled.button`
  ${(props) => variant[props.variant]}
  ${tw` rounded text-lg font-bold px-4 py-2`}

  width: ${(props) => (props ? props.width : "5.5rem")};
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: none;
  }
 
`;

export const StyledChildren = styled.div`
  ${tw`my-1 mx-2`}
`;
