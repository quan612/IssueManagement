import styled from "styled-components";
import tw from "tailwind.macro";
import { CardBackgroundStyled } from "shared/components/styles";

export const EllipsisV = styled.span`
  display: none;
  width: 100%;
  text-align: right;
`;

export const ItemStyle = styled(CardBackgroundStyled)`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 120px;
  width: 100%;

  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding: 1rem;

  border-radius: 1rem;
  border-left: 1rem solid ${(props) => props.theme.colors.primary};

  &:hover {
    ${EllipsisV} {
      display: block;
    }
    opacity: 0.8;
    cursor: pointer;
  }

  @media only screen and (min-device-width: 360px) and (max-device-width: 667px) {
    height: 100px;
  }
`;

export const Name = styled.h3`
  ${tw`text-white text-lg lg:text-4xl`}
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.span`
  ${tw`text-gray-500 text-sm lg:text-xl`}
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
  }
`;

export const EllipsisVContainer = styled.div`
  min-width: 1.2rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2rem;
  right: 1px;
  width: 100px;
  padding: 0.5rem 0;

  background-color: whitesmoke;
  border-radius: 0.2rem;
`;

export const IconWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  margin-left: 5px;
`;

export const Label = styled.span`
  color: black;
`;

Name.displayName = "Name";
Description.displayName = "Description";
EllipsisV.displayName = "EllipsisV";
