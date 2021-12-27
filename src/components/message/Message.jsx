import React from "react";
import { MessageStyledContainer } from "./Message.styled";

export const Message = (props) => (
  <MessageStyledContainer name={"msg"}>{props.value}</MessageStyledContainer>
);
