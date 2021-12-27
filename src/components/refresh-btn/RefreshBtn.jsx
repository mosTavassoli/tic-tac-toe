import React from "react";
import { RefreshBtnContainer } from "./RefreshBtn.styled";

export const RefreshBtn = (props) => (
  <RefreshBtnContainer name={"btn"} onClick={props.onClick}>
    <p>{props.value}</p>
  </RefreshBtnContainer>
);
