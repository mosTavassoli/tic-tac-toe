import React from "react";
import { Box } from "../box/Box";
import { BoardStyle } from "./Board.styled";

// creating a sqaure box in with grid layout

// props has 'value' which is a array of 9 charectors that needs to de displayed in box.js
// and a 'onClick' function that needs to be called when button is clicked
// restoring array of box.jsx
export const Board = (props) => (
  <BoardStyle>
    {[...Array(9)].map((_, pos) => (
      <Box
        key={pos}
        name={pos}
        onClick={() => props.onClick(pos)}
        value={props.value[pos]}
      />
    ))}
  </BoardStyle>
);
