import React, { useState } from "react";
import { Board } from "../board/Board";
import { Message } from "../message/Message";
import { RefreshBtn } from "../refresh-btn/RefreshBtn";
import { WinMessage } from "../win-message/WinMessage";
import { GameStyledContainer } from "./Game.styled";
// import Refresh from './refresh'

const isWon = (board) => {
  // list of postion that is winning
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // checking each of the postition seeing if the combination is there
  // if it does return the True
  // else return false
  for (let i = 0; i < lines.length; i++) {
    let [a, b, c] = lines[i];
    //console.log(board[a] === board[b] && board[a] === board[c])
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
};

export const Game = () => {
  // this is for board
  // default value for all the elemnt is ""
  const [board, setBoard] = useState(Array(9).fill(""));
  // first player is "X"
  // if the game is over put "" as player
  const [isPlayer, setIsPlayer] = useState("X");
  const [message, setMessage] = useState("Click to start");
  const [isWin, setIsWin] = useState(false);
  const [whoWin, setWhoWin] = useState("");
  const [isDraw, setIsDraw] = useState(false);

  const refresh = () => {
    setBoard(Array(9).fill(""));
    setMessage("Click to start");
    setIsPlayer("X");
    setIsWin(false);
    setIsDraw(false);
  };

  const handleInput = (pos) => {
    if (isPlayer === "" || board[pos] !== "") {
      //is the game is over don't play
      // if the box has been clocked already then return
      return;
    }

    const boardCopy = [...board];
    boardCopy[pos] = isPlayer;
    setBoard(boardCopy); // updating board for current player

    if (isWon(boardCopy)) {
      setIsWin(true);
      setWhoWin(isPlayer);
      // once game is over
      // setMessage(`WON: ${isPlayer}`);
      setMessage("");
      // since the game is over putting ""
      setIsPlayer("");
      return;
    }

    if (boardCopy.indexOf("") === -1) {
      // if no more moves game is draw
      setMessage("");
      setIsDraw(true);
      setWhoWin("");
      setIsPlayer("");
    } else {
      let nextPlayer = isPlayer === "X" ? "O" : "X";
      setIsPlayer(nextPlayer); // updating player
      setMessage(`TURN: ${nextPlayer}`);
    }
  };

  return (
    <>
      <GameStyledContainer>
        <Message value={message} />
        {isWin || isDraw ? (
          <WinMessage whoWin={whoWin} isDraw={isDraw} />
        ) : (
          <Board onClick={handleInput} value={board} />
        )}
        <RefreshBtn onClick={refresh} value={"Refresh"} />
      </GameStyledContainer>
    </>
  );
};

// export default Game;
