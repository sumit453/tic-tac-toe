import React, { useEffect, useState } from "react";
import Square from "./components/SquareComponent";

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [xTerm, setTerm] = useState(true);

  function onSquareClicked(index) {
    let string = Array.from(gameState);
    string[index] = xTerm ? "X" : "O";
    updateGameState(string);
    setTerm(!xTerm);
  }
  useEffect(() => {
    const winner = calculateWinner();
    if (winner) {
      alert(`Ta da! ${winner} has won the Game`);
      updateGameState(initialState);
      setTerm(true);
    }
  }, [gameState]);

  const calculateWinner = () => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };
  return (
    <div className="app-header">
      <h1 className="heading-text">Tic Tac Toe</h1>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          state={gameState[0]}
          onclick={() => onSquareClicked(0)}
        />
        <Square
          className="b-bottom-right"
          state={gameState[1]}
          onclick={() => onSquareClicked(1)}
        />
        <Square
          className="b-bottom"
          state={gameState[2]}
          onclick={() => onSquareClicked(2)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-bottom-right"
          state={gameState[3]}
          onclick={() => onSquareClicked(3)}
        />
        <Square
          className="b-bottom-right"
          state={gameState[4]}
          onclick={() => onSquareClicked(4)}
        />
        <Square
          className="b-bottom"
          state={gameState[5]}
          onclick={() => onSquareClicked(5)}
        />
      </div>
      <div className="row jc-center">
        <Square
          className="b-right"
          state={gameState[6]}
          onclick={() => onSquareClicked(6)}
        />
        <Square
          className="b-right"
          state={gameState[7]}
          onclick={() => onSquareClicked(7)}
        />
        <Square state={gameState[8]} onclick={() => onSquareClicked(8)} />
      </div>
      <button
        className="clear-button"
        onClick={() => {
          return updateGameState(initialState), setTerm(true);
        }}
      >
        Clear Game
      </button>
      <footer>
        <p className="fc-aqua fw-600">Copy right {new Date().getFullYear()}</p>{" "}
        {/* Outputs 2020 */}
      </footer>
    </div>
  );
}

export default App;
