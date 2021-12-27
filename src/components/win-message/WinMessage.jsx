import React from "react";
import { WinMessageContainer } from "./WinMessage.styled";

export const WinMessage = (props) => {
  console.log(props);
  return (
    <WinMessageContainer>
      {props.isDraw ? (
        <>
          <p>XO</p>
          <h3>DRAW</h3>
        </>
      ) : (
        <>
          <p>{props.whoWin}</p> <h3>WINNER!</h3>
        </>
      )}
    </WinMessageContainer>
  );
};
