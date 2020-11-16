import styled from "styled-components";
import tw from "tailwind.macro";

export const Wrapper = styled.div`
  ${tw`mt-3`}
  width: 100%;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  height: auto;
  border-width: 0 0 1px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-radius: 0;
  border-color: #bdbdbd;
  padding: 10px 0;
  font-size: 1.3rem;
  color: #373737;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }
`;

export const Editable = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
`;

export const TextAreaContainer = styled.div`
  margin: 18px 0 0 8px;

  display: inline-block;
  width: 100%;
`;

export const TitleTextarea = styled.textarea`
  padding: 7px 7px 8px;
  line-height: 1.28;
  border: none;
  resize: none;
  background: transparent;
  border: 1px solid transparent;
  box-shadow: 0 0 0 1px transparent;
  transition: background 0.1s;
`;
