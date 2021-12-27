import styled from "styled-components";

export const BoxStyledContainer = styled.button`
  border: 3px solid black;
  font-size: 40px;
  color: ${(props) => (props.value === "X" ? "red" : "green")};

  &:hover {
    background-color: #d3d3d3;
  }
`;
