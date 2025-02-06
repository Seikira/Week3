import React, { useState } from 'react';
import Status from './Status';
import Restart from './Restart';

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);

    const checkWinner = (board) => {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    };

    const handleRestart = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        setWinner(null);
    };

    return (
        <div className="game-container">
            <div className="board">
                {board.map((square, index) => (
                    <div className="square" key={index} onClick={() => handleClick(index)}>
                        {square}
                    </div>
                ))}
            </div>
            <Status currentPlayer={currentPlayer} winner={winner} />
            <Restart onRestart={handleRestart} />
        </div>
    );
};

export default Board;
