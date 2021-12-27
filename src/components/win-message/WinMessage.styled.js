import styled from "styled-components";

export const WinMessageContainer = styled.div`
  width: 15rem;
  height: 15rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${(props) => (props.whoWin === "X" ? "red" : "green")};
  p {
    font-size: 5rem;
  }
`;
