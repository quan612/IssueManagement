import styled, { css } from "styled-components";
import tw from "tailwind.macro";
import { animated } from "react-spring";

const type = {
  success: tw`bg-green-500 `,
  warning: tw`bg-yellow-700`,
};

const position = {
  "bottom-left": css`
    bottom: 15px;
    left: 15px;
  `,
  "bottom-right": css`
    bottom: 15px;
    right: 15px;
  `,
};

export const transitionStyle = {
  "top-left": {
    from: { opacity: 0, transform: "translateX(-200px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(-150px)" },
  },
  "bottom-left": {
    from: { opacity: 0, transform: "translateX(-200px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(-150px)" },
  },

  "top-right": {
    from: { opacity: 0, transform: "translateX(200px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(150px)" },
  },
  "bottom-right": {
    from: { opacity: 0, transform: "translateX(200px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(150px)" },
  },
};

export const Container = styled.div`
  min-width: 200px;
  position: fixed;
  ${(props) => position[props.position]}
`;

export const ToastItem = styled(animated.div)`
  background: white;
  margin-top: 15px;
  border-radius: 25px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 #0b45d9;
  }
`;

export const ToastMessage = styled.div`
  ${(props) => type[props.type]}
  ${tw`p-2 my-2 items-center leading-4 text-xl  text-center font-bold text-white`}
  border-radius: 15px;
`;
