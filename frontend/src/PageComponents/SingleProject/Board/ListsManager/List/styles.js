import styled from "styled-components";
import tw from "tailwind.macro";

export const ListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  ${tw`flex flex-col pt-3 `};
  /* height: 100%; */
  /* min-height: 500px; */
`;

export const ListTitle = styled.span`
  font-weight: 600;
  color: ${(props) => (props.theme ? props.theme.list.title : "white")};
`;

export const ListSubTitle = styled.span`
  font-weight: 500;
  color: ${(props) => (props.theme ? props.theme.list.subtitle : "white")};
`;

export const ListItem = styled.div`
  height: 100%;
  ${tw`flex flex-col `}
  /* background-color: orange; */
  margin-top: 0.5rem;
  margin: 0 0.5rem;
  padding: 0.5rem;
  /* overflow-y: auto;
  position: relative; */
`;
