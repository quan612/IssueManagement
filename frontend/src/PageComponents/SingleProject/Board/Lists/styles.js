import styled from "styled-components";
import tw from "tailwind.macro";

export const BoardListWrapper = styled.div`
  ${tw`w-full h-full mt-4 pb-2`}
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-gap: 1rem;
  /* overflow: auto; */

  @media only screen and (min-device-width: 360px) and (max-device-width: 667px) {
    ${tw` mt-4 pb-2  mr-1`}
    display: block;
  }
`;
