import React from "react";
import { WinMessageContainer } from "./WinMessage.styled";

export const WinMessage = (props) => {
  return (
    <WinMessageContainer whoWin={props.whoWin}>
      {props.isDraw ? (
        <div style={{ color: "orangered" }}>
          <p>XO</p>
          <h3>DRAW</h3>
        </div>
      ) : (
        <div>
          <p>{props.whoWin}</p>
          <h3>WINNER!</h3>
        </div>
      )}
    </WinMessageContainer>
  );
};
