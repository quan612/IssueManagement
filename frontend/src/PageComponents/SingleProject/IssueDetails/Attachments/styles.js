import styled from "styled-components";

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16;
`;

export const ThumbStyle = styled.div`
  display: inline-flex;
  border-radius: 1px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 147px;
  height: 147px;
  padding-top: 4px;
  padding-bottom: 4px;
  text-align: center;
`;

export const ThumbInner = styled.a`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 147px;
  height: 147px;
`;

export const Img = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const ErrorStyle = styled.div`
  color: #c45e5e;
  font-size: 0.75rem;
`;
