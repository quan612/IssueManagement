import styled from "styled-components";
import tw from "tailwind.macro";
import { IssueStatus } from "shared/constants/issues";

export const ButtonWrapper = styled.div`
  display: flex;
  padding: 0.5rem 0 1rem 0;
  & > button {
    margin-right: 6px;
  }
`;

export const CardBackgroundStyled = styled.div`
  background: ${(props) => (props.theme ? props.theme.card.background : "white")};
`;

export const InputBackgroundStyled = styled.div`
  background: ${(props) => (props.theme.input ? props.theme.input.background : "white")};
`;

export const SelectBackgroundStyled = styled(InputBackgroundStyled)`
  border: 1px solid ${(props) => props.theme.input.borderColor};
  &:hover,
  :focus {
    border-color: ${(props) => props.theme.colors.primary};
    border-width: 1px;
  }
`;

export const IconContainer = styled.div`
  margin-right: 5px;
`;

export const DatesContainer = styled.span`
  ${tw` mt-1 text-gray-500 leading-tight`}
`;

export const FlexItemsWrapper = styled.div`
  ${tw`flex flex-wrap items-center`}
`;

export const StyledTag = styled.div`
  background-color: ${(props) => props.color ?? "black"};
  color: white;
  padding: 4px 0.8rem;
  height: 2rem;
  border-radius: 8px;

  display: inline-flex;
  align-items: center;
`;

export const SelectItemLabel = styled.div`
  ${tw`text-gray-600 font-semibold `}
`;

export const statusColor = {
  [IssueStatus.BACKLOG]: tw`text-gray-600 `,
  [IssueStatus.OPEN]: tw` text-gray-600 `,
  [IssueStatus.INPROGRESS]: tw`text-blue-700`,
  [IssueStatus.DONE]: tw` text-green-600`,
};

export const statusColorWithBorder = {
  [IssueStatus.BACKLOG]: tw`bg-gray-500 `,
  [IssueStatus.OPEN]: tw` bg-gray-700 `,
  [IssueStatus.INPROGRESS]: tw`bg-blue-700`,
  [IssueStatus.DONE]: tw` bg-green-600`,
};

export const IssueStatusStyleWithBorder = styled.div`
  ${(props) => statusColorWithBorder[props.status]}
  ${tw`font-bold text-white px-1 py-1 rounded-lg ml-1 mr-1`}
  display: inline-flex;
`;

export const StatusStyle = styled.div`
  ${(props) => statusColor[props.status]}
  ${tw`font-bold `}
  text-transform: uppercase;
`;
