import styled from "styled-components";
import tw from "tailwind.macro";

export const BoardListWrapper = styled.div`
  /* ${tw`flex w-full h-full mt-4 pb-2`} */

  ${tw`w-full h-full mt-4 pb-2`}
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
`;
