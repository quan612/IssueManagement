import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem 0;
  padding: 0rem 1rem;
  border-radius: 1rem;

  background: ${(props) => (props.theme ? props.theme.card.background : "white")};
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 0;
  max-width: 350px;
`;
