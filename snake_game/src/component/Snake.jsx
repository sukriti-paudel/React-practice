import React, { useEffect, useRef, useState } from 'react';

const Grid_size = 20;
const gamegrid = Array.from({ length: Grid_size }, () => new Array(Grid_size).fill(''));

const initial_snake = [[5, 5], [4,5]];
const generateFood = (snake) => {
    let food;
    do {
        food = [
            Math.floor(Math.random() * Grid_size),
            Math.floor(Math.random() * Grid_size)
        ];
    } while (snake.some(([x, y]) => x === food[0] && y === food[1])); 
    return food;
};

const Snake = () => {
    const [snakebody, setSnakebody] = useState(initial_snake);
    const [food, setFood] = useState(generateFood(initial_snake)); // Initialize food state only once
    const directionref = useRef([1, 0]);
    const [resetMessage, setResetMessage] = useState('');

    const isSnakeBody = (xc, yc) => {
        return snakebody.some(([x, y]) => x === xc && y === yc);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSnakebody((prevSnakeBody) => {
                if (!prevSnakeBody || !prevSnakeBody.length) return prevSnakeBody;

                const newHead = [
                    prevSnakeBody[0][0] + directionref.current[0],
                    prevSnakeBody[0][1] + directionref.current[1]
                ];

                // Check for wall collisions and self-collision
                if (
                    newHead[0] < 0 ||
                    newHead[0] >= Grid_size ||
                    newHead[1] < 0 ||
                    newHead[1] >= Grid_size ||
                    prevSnakeBody.some(([x, y]) => newHead[0] === x && newHead[1] === y)
                ) {
                    setResetMessage('Game Reset!');
                    setFood(generateFood(initial_snake)); // 
                    setTimeout(() => setResetMessage(''), 1000); 
                    return initial_snake; 
                }

                const newSnakeBody = [...prevSnakeBody];
                // Check if the snake has eaten food
                if (newHead[0] === food[0] && newHead[1] === food[1]) {
                    console.log('Food eaten! Generating new food...');
                    setFood(generateFood(newSnakeBody)); // 
                } else {
                    newSnakeBody.pop(); 
                }

                newSnakeBody.unshift(newHead); 
                return newSnakeBody; 
            });
        }, 200); 
        const handleDirection = (e) => {
            const key = e.key;
            if (key === 'ArrowUp' && directionref.current[1] !== 1) {
                directionref.current = [0, -1];
            } else if (key === 'ArrowDown' && directionref.current[1] !== -1) {
                directionref.current = [0, 1];
            } else if (key === 'ArrowLeft' && directionref.current[0] !== 1) {
                directionref.current = [-1, 0];
            } else if (key === 'ArrowRight' && directionref.current[0] !== -1) {
                directionref.current = [1, 0];
            }
        };

        window.addEventListener('keydown', handleDirection);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('keydown', handleDirection);
        };
    }, [food]); 

    return (
        <>
            <h1 className='reset-message'>{resetMessage || 'Snake Game'}</h1> 
            <div className="container">
                {gamegrid.map((row, yc) =>
                    row.map((cell, xc) => (
                        <div
                            key={`${xc}-${yc}`}
                            className={`cell ${isSnakeBody(xc, yc) ? 'snake' : ''} ${food[0] === xc && food[1] === yc ? 'food' : ''}`}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default Snake;
