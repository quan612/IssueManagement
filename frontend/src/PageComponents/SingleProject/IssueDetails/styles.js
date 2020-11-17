import styled from "styled-components";
import tw from "tailwind.macro";

export const FlexColContainer = styled.div`
  ${tw`flex flex-col p-1`}
  position: relative;
`;

export const FlexRowContainer = styled.div`
  ${tw`flex  p-1`}
`;

export const PanelContainer = styled.div`
  background-color: white;
  border: solid 1px #c2c2c2;
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

export const FlexWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    flex: 0 0 48.5%;
  }

  @media only screen and (max-width: 768px) {
    > div {
      flex-grow: 1;
      flex-basis: 100%;
    }
  }
`;

export const Left = styled.div`
  width: 65%;
  padding-right: 15px;
`;

export const Right = styled.div`
  width: 35%;
  padding-top: 5px;
`;
