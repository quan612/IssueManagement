import styled from "styled-components";
import tw from "tailwind.macro";

export const Container = styled.div`
  ${tw`w-full `}
`;

export const Content = styled.div`
  ${tw`w-full py-1 mr-2`}
`;

export const CommentContainer = styled.div`
  position: relative;
  max-width: 98%;
  display: flex;
  /* width: 98%; */
  min-width: 75px;
  background: ${(props) => props.theme.list.background};

  margin: 5px;
  padding: 4px 10px;
  border-radius: 10px;

  white-space: pre-wrap; /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* IE */
`;

export const Comment = styled.div`
  display: flex;
  flex-basis: auto;
  padding-left: 5px;

  flex-grow: 1;
  flex-shrink: 1;
  padding-top: 11px;
  padding-bottom: 11px;
  align-items: center;
`;

export const CommentUtility = styled.div`
  width: 44px;
  height: 100%;
  display: flex;
  flex-basis: auto;
`;

export const EditContainer = styled.div`
  ${tw`ml-1 mr-2 mt-2`}
`;

export const EditButton = styled.span`
  ${tw`ml-2 hover:cursor-pointer text-gray-700 hover:text-yellow-700 `}
  height: 3rem;
  padding-top: 15px;
`;

export const DatesContainer = styled.div`
  ${tw`w-full text-gray-500 leading-tight`}
  display: flex;
  flex-wrap: wrap;
`;
