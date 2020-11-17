import styled, { css } from "styled-components";
import tw from "tailwind.macro";

const variant = {
  "primary-outline": css`
    background: "transparent";
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.primary};
    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: white;
    }
  `,
  "secondary-outline": tw`bg-transparent text-gray-900 hover:bg-gray-500 hover:text-white border-transparent `,

  primary: css`
    background: ${(props) => props.theme.colors.primary};
    color: white;
    border: 1px solid ${(props) => props.theme.colors.primary};
  `,

  secondary: tw`bg-gray-500 text-gray-900 hover:bg-gray-400 `,
  info: tw`bg-black text-white hover:bg-gray-900`,
};

export const StyledButton = styled.button`
  ${(props) => variant[props.variant]}
  ${tw` rounded px-2 py-2`}
  font-weight:500;
  font-size: 1.2rem;
  width: ${(props) => (props ? props.width : "3rem")};
  opacity: 1;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 667px) {
    /* width:2rem; */
    font-size: 1rem;
    padding: 0.3rem;
  }
`;

export const StyledChildren = styled.div`
  ${tw`my-1 mx-2`}
`;
