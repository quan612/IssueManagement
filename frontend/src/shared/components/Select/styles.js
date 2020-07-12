import tw from "tailwind.macro";
import styled from "styled-components";

export const SelectContainer = styled.div`  
  ${tw` relative focus:shadow-outline rounded`}
  width: ${(props) => (props.width ? props.width : "100%")};  
  background: ${(props) => (props.theme.input ? props.theme.input.background : "white")};
  color: ${(props) => (props.theme.input ? props.theme.input.textColor : "black")};
  border: 1px solid ${(props) => props.theme.colors.borderNotFocused};

  &:hover, :focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-width: 1px;
    cursor: pointer;
  }  
`;

export const SelectItem = styled.div`
  ${tw`flex items-center px-2 py-1 leading-none lg:leading-tight`}
  min-height:2.5rem;
  font-size: inherit;
`;

export const MenuContainer = styled.div`
  ${tw`absolute cursor-pointer w-full z-50 shadow mt-2 mb-2`}
  max-height:250px;
  overflow-y: auto;

  background: inherit;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => (props.theme.input ? props.theme.input.textColor : "black")};
`;

export const MenuItem = styled(SelectItem)`
  &:hover {
    opacity: 0.8;
    background: ${(props) => (props.theme.card ? props.theme.card.background : "white")};
  }
`;

//for render individual component
export const OptionContainer = styled.div`
  ${tw`w-full flex items-center justify-between`}
`;
