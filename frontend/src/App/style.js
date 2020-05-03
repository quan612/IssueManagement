import styled from "styled-components";
import tw from "tailwind.macro";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  /* position: absolute; */
  position: relative;
  padding-top: 1rem;
  border-radius: 1rem;

  min-height: calc(100% - 60px);
  /* custom */
  width: auto;
  min-width: 968px;
  max-width: 1280px;
  margin: 0 auto !important;
  background-color: white;
`;
