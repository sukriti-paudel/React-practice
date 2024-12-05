import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../assets/2.png';
import cross_icon from '../assets/a.png';

const TicTacToe = () => {
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [message, setMessage] = useState('Tic-Tac-Toe');
    const titleRef = useRef(null);

    const toggle = (num) => {
        if (lock || board[num]) {
            return;
        }
        const newBoard = [...board];
        newBoard[num] = count % 2 === 0 ? 'x' : 'o'; 
        setBoard(newBoard);
        setCount(count + 1); 
        checkWin(newBoard);
    };

    const win = (winner) => {
        setLock(true);
        setMessage(`Congratulations: ${winner === 'x' ? 'Player X' : 'Player O'}`);
    };

    const checkWin = (newBoard) => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]   // Diagonals
        ];

        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
                win(newBoard[a]);
                return;
            }
        }
    };

    const resetGame = () => {
        setBoard(['', '', '', '', '', '', '', '', '']);
        setCount(0);
        setLock(false);
        setMessage('Tic-Tac-Toe');
    };

    const getIcon = (value) => {
        if (value === 'x') {
            return <img src={cross_icon} alt="X" />;
        }
        if (value === 'o') {
            return <img src={circle_icon} alt="O" />;
        }
        return null;
    };

    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}>
                {message}
            </h1>
            <div className='board'>
                {[0, 1, 2].map(row => (
                    <div className={`row${row + 1}`} key={row}>
                        {[0, 1, 2].map(col => {
                            const index = row * 3 + col;
                            return (
                                <div
                                    className="boxes"
                                    key={index}
                                    onClick={() => toggle(index)}
                                    style={{ background: board[index] ? 'none' : '' }} 
                                >
                                    {getIcon(board[index])}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
            <button className='reset' onClick={resetGame}>
                Reset
            </button>
        </div>
    );
};

export default TicTacToe;
