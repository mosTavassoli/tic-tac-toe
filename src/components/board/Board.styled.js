import styled from "styled-components";

export const BoardStyle = styled.div`
  min-width: 15rem;
  height: 15rem;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;
