import React from "react";
import { BoxStyledContainer } from "./Box.styled";

export const Box = (props) => {
  const { name, onClick, value } = props;
  return (
    <BoxStyledContainer name={name} onClick={onClick} value={value}>
      {value}
    </BoxStyledContainer>
  );
};
