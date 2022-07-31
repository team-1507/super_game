import React, { useEffect } from 'react';
import GameBackButton from './components/GameBackButton';

const Game = () => {
    const { innerWidth, innerHeight } = window;
    const canvasRef = React.createRef<HTMLCanvasElement>();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const ctx = canvasRef?.current?.getContext("2d");

        if (!ctx) return;

        ctx.clearRect(0, 0, innerHeight, innerWidth);
        return () => {
            document.body.style.overflow = '';
        }
    });

    return (
        <div className="game-page">
            <GameBackButton />
            <canvas ref={canvasRef} width={innerWidth} height={innerHeight} />
        </div>
    );
};

export default Game;
