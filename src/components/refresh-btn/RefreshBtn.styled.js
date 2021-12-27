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
  border-radius: 0.2rem;

  p {
    text-transform: uppercase;
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(255, 204, 204);
    transform: translateY(-3px);
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
    }
  }
  &:active {
    transform: translateY(-1px);
    /* box-shadow: 0 5px 10px rgba(87, 235, 139); */
    /* color: green; */
  }
`;
