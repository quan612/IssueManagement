import styled from "styled-components";
import tw from "tailwind.macro";

import { color, font } from "shared/utils/styles";

export const FlexColContainer = styled.div`
  ${tw`flex flex-col p-1`}
`;

export const FlexRowContainer = styled.div`
  ${tw`flex  p-1`}
`;

export const Left = styled.div`
  width: 65%;
  padding-right: 15px;
`;

export const Right = styled.div`
  width: 35%;
  padding-top: 5px;
`;

export const TopActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 21px 18px 0;
`;

export const TopActionsRight = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 4px;
  }
`;

export const SectionTitle = styled.div`
  margin: 24px 0 5px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)}
  ${font.bold}
`;
