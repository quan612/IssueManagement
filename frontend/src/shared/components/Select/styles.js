import tw from "tailwind.macro";
import styled from "styled-components";

const variant = {
  empty: tw`bg-transparent hover:bg-gray-200`,
  normal: tw`bg-gray-100 hover:bg-gray-200 border border-gray-200 shadow`,
};

export const SelectContainer = styled.div`
  ${(props) => variant[props.variant]}
  ${tw`cursor-pointer relative text-gray-700 focus:shadow-outline rounded leading-tight`}
  width: ${(props) => (props.width ? props.width : "100%")}
`;

export const SelectValueContainer = styled.div`
  ${tw`flex items-center px-2 py-2 `}
`;

export const MenuContainer = styled.div`
  ${tw`absolute cursor-pointer w-full bg-white text-gray-700 z-50 border shadow`}
`;

export const MenuItemContainer = styled(SelectValueContainer)`
  ${tw` hover:bg-indigo-300 hover:text-white`}
`;

export const OptionContainer = styled.div`
  ${tw`w-full flex items-center justify-between`}
`;
