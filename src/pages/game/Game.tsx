import React, { useEffect } from 'react';
import GameBackButton from './components/GameBackButton';

type ILoadImage = {
    src: string,
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
};

function drowImage ({ src, ctx, width, height }: ILoadImage) {
    const image = new Image();
    image.src = src;

    image.onload = () => {
        return ctx.drawImage(image, 0, 0, width, height);
    }
}

const Game = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const canvasRef = React.createRef<HTMLCanvasElement>();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const ctx = canvasRef?.current?.getContext("2d");

        if (!ctx) return;

        ctx.clearRect(0, 0, height, width);
        drowImage({ src: require('/static/images/game.png'), ctx, width, height });
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
