import { useState } from "react";
import Square from "./Square.jsx";
import { calculateWinner } from "../utils/game.js";

function Board() {
  // O Board concentra o estado e as regras da partida.
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);
  const gameFinished = Boolean(winner) || isDraw;

  function handleSquareClick(index) {
    // Impede alterar uma casa ocupada ou continuar após o fim da partida.
    if (squares[index] || gameFinished) return;

    // Cria uma nova matriz; não altera diretamente o estado anterior.
    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? "X" : "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleNewGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (isDraw) {
    status = "Empate! Ninguém venceu.";
  } else {
    status = `Próximo jogador: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div
        className={`status ${gameFinished ? "status-finished" : ""}`}
        role="status"
        aria-live="polite"
      >
        {status}
      </div>

      <div className="board" role="group" aria-label="Tabuleiro do jogo da velha">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleSquareClick(index)}
            index={index}
          />
        ))}
      </div>

      <button className="reset-button" type="button" onClick={handleNewGame}>
        Novo Jogo
      </button>
    </>
  );
}

export default Board;
