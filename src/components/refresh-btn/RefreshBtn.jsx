import React from "react";
import { RefreshBtnContainer } from "./RefreshBtn.styled";

export const RefreshBtn = React.memo((props) => {
  return (
    <RefreshBtnContainer name={"btn"} onClick={props.onClick}>
      <p>{props.value}</p>
    </RefreshBtnContainer>
  );
});
