import styled from "styled-components";
import tw from "tailwind.macro";

const color = {
  "primary-outline": tw`bg-transparent text-indigo-700 hover:bg-indigo-500 hover:text-white border-indigo-700 hover:border-transparent`,
  "secondary-outline": tw`bg-transparent text-gray-700 hover:bg-gray-500 hover:text-white border-transparent `,
  primary: tw`bg-indigo-700 text-white hover:bg-indigo-600 `,
  secondary: tw`bg-gray-200 text-gray-700 hover:bg-gray-400 `,
  info: tw`bg-black text-white hover:bg-blue-600`,
};

export const StyledButton = styled.button`
  ${(props) => color[props.variant]}
  ${tw`border rounded mr-2 text-lg font-bold px-6 py-2 text-sm `}
  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
  width: ${(props) => (props ? props.width : "5.5rem")};
`;

export const StyledChildren = styled.div`
  ${tw` my-1 mx-2`}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 6px;
  & > button {
    margin-right: 6px;
  }
`;
