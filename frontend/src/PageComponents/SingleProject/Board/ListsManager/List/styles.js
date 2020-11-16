import styled from "styled-components";
import tw from "tailwind.macro";

export const ListContainer = styled.div`
  ${tw`flex flex-col rounded p-3 `}
  min-height:500px;
`;

export const ListTitle = styled.div`
  font-weight: 600;
  color: ${(props) => (props.theme ? props.theme.list.title : "white")};
`;

export const ListSubTitle = styled.div`
  font-weight: 500;
  color: ${(props) => (props.theme ? props.theme.list.subtitle : "white")};
`;
