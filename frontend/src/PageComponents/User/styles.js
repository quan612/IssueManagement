import styled from "styled-components";
import tw from "tailwind.macro";

export const PageContainer = styled.div`
  ${tw` flex content-center justify-center h-full w-full`}
  max-width: 960px;
  margin: auto;
  padding: 0 1rem;
`;

export const Wrapper = styled.div`
  top: 100px;
  height: 400px;

  width: 100%;
  position: relative;

  @media only screen and (min-device-width: 360px) and (max-device-width: 667px) {
    /* width:2rem; */
    top: 100px;
    padding: 0.3rem;
  }
`;

export const PanelContainer = styled.div`
  background-color: white;
  border: solid 1px #c2c2c2;
  border-radius: 1rem;
  padding: 1rem 2rem;
`;

export const UserDetailsWrapper = styled.div`
  height: auto;
  padding: 0.7rem;
`;
