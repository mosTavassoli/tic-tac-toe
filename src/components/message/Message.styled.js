import styled from "styled-components";

export const MessageStyledContainer = styled.p`
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  padding: 2rem 1rem;
  text-transform: uppercase;
  color: ${(props) => (props.value === "TURN: X" ? "red" : "green")};
`;
