import styled from "styled-components";
import tw from "tailwind.macro";

export const BoardListWrapper = styled.div`
  ${tw`w-full  mt-4 `}
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 2px;
  background-color: ${(props) => props.theme.colors.borderColor};
  margin-bottom: 1rem;

  /* height:100%; */

  @media only screen and (min-device-width: 360px) and (max-device-width: 667px) {
    ${tw` mt-4 mb-2  mr-1`}
    display: block;
    margin-bottom: 1rem;
  }
`;
