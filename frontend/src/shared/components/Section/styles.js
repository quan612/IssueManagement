import styled from "styled-components";
import tw from "tailwind.macro";

export const SectionContainer = styled.div`
  margin-top: 0.5rem;
`;

export const SectionTitle = styled.div`
  ${tw` font-bold mb-2 mt-3 `}
  color:${(props) => (props.theme.card ? props.theme.colors.textPrimary : "black")}
`;
