import styled from "styled-components";
import tw from "tailwind.macro";
// import { animated } from "react-spring";

export const ListContainer = styled.div`
  ${tw`flex flex-col mb-4 items-center`}
`;

export const ItemContainer = styled.div`
  ${tw`w-full pt-3 px-3 md:pr-2 mb-7`}
`;

export const SmallIconContainer = styled.div`
  min-width: 1rem;
`;

export const EllipsisV = styled.span`
  display: none;
  width: 100%;
  text-align: right;
`;

export const ItemStyle = styled.div`
  ${tw`border rounded shadow p-2 flex flex-row cursor-pointer mx-auto`}

  height: 120px;
  min-width: 600px;
  max-width: 600px;
  transition: all 0.3s ease-in-out;
  position: relative;
  &:hover {
    ${EllipsisV} {
      display: block;
    }
    opacity: 0.9;
  }
  background: linear-gradient(135deg, #08979d 0%, #8474a1 100%);
`;

export const ItemTitle = styled.h3`
  ${tw`text-white text-3xl`}
`;

export const ItemDescription = styled.span`
  ${tw`text-white text-xl`}
`;

export const Menu = styled.div`
  ${tw`ml-auto flex flex-col flex-end py-2 content-end`}
  position: absolute;
  border-radius: 0.2rem;
  background-color: whitesmoke;
  width: 100px;
  height: auto;
  top: 2rem;
  right: 1px;
`;

export const ItemFormContainer = styled.div`
  ${tw`bg-white border rounded shadow p-2 flex flex-col mx-auto `}
  height: auto;
  min-width: 600px;
  max-width: 600px;
`;

export const IconContainer = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  margin-left: 5px;
`;

export const LoadingContainer = styled.div`
  ${tw`leading-normal my-2`}
`;
