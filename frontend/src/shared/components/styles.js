import styled from "styled-components";
import tw from "tailwind.macro";
import { statusColor, statusColorWithBorder } from "shared/utils/styles";

export const IconContainer = styled.div`
  margin-right: 5px;
`;

export const DatesContainer = styled.div`
  ${tw`w-full mt-1 py-1 text-gray-500 leading-tight italic`}
`;

export const FlexItemsWrapper = styled.div`
  ${tw`flex flex-wrap items-center`}
`;

export const StatusStyle = styled.div`
  ${(props) => statusColor[props.status]}
  ${tw`font-semibold `}
`;

export const SelectItemLabel = styled.div`
  ${tw`text-gray-600 font-semibold `}
`;

export const IssueStatusStyleWithBorder = styled.div`
  ${(props) => statusColorWithBorder[props.status]}
  ${tw`font-semibold text-white px-1 py-1 rounded-lg ml-1 mr-1`}
  display: inline-flex;
`;
