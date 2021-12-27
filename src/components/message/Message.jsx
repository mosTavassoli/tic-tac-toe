import React from "react";
import { MessageStyledContainer } from "./Message.styled";

export const Message = (props) => {
  return (
    <MessageStyledContainer value={props.value} name={"msg"}>
      {props.value}
    </MessageStyledContainer>
  );
};
