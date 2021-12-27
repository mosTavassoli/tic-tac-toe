import React from "react";
import { Box } from "../box/Box";
import { BoardStyle } from "./Board.styled";

export const Board = React.memo((props) => {
  const { onClick, value } = props;
  return (
    <BoardStyle>
      {[...Array(9)].map((_, pos) => (
        <Box
          key={pos}
          name={pos}
          onClick={() => onClick(pos)}
          value={value[pos]}
        />
      ))}
    </BoardStyle>
  );
});
