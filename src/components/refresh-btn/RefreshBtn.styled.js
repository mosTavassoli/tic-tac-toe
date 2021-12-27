import styled from "styled-components";

export const RefreshBtnContainer = styled.a`
  margin: 0 auto;
  font-size: 1.2rem;
  margin-top: 2rem;
  border: 0;
  font-weight: 900;
  padding: 0.5rem;
  transition: all 0.2s ease;
  background-color: orange;

  p {
    text-transform: uppercase;
  }

  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;
