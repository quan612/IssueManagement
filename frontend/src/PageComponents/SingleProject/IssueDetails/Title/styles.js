import styled from "styled-components";
import tw from "tailwind.macro";

export const Wrapper = styled.div`
  ${tw`mt-3`}
`;

export const Title = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  padding: 4px;
  line-height: 1.25;
  border: 1px solid transparent;
  border-radius: 1rem;

  white-space: pre-wrap; /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* IE */

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
