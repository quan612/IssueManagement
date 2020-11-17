import styled from "styled-components";

export const LogWrapper = styled.div`
  min-height: 62px;
`;

export const LogItemWrapper = styled.div`
  margin-bottom: 1rem;

  & > div {
    padding-top: 1rem;
    border-top: solid 1px #bdbdbd;
    position: relative;
  }

  &:first-child > div {
    margin-top: -1rem;
    border-top: 0;
    position: relative;
  }

  &:last-child:not(:first-child) > div {
    border-top: solid 1px #bdbdbd;
    position: relative;
    padding-bottom: 1rem;
  }
`;

export const BulletList = styled.li`
  position: relative;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 12px;
    left: 0;
    height: 8px;
    width: 8px;
    border: 2px solid #868cb7;
    border-radius: 100%;
  }
`;
