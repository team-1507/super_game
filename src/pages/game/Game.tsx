import React, { createRef, KeyboardEvent } from 'react';
import Character from '../../game/character/Character';
import Map from '../../game/map/Map';
import PauseMenu from '../../game/ui/PauseMenu';
import GameBackButton from './components/GameBackButton';
import './Game.scss';

const Game = () => {
    const container = createRef<HTMLDivElement>();
    const pauseMenu = createRef<HTMLDivElement>();
    const keypressWrapper = createRef<HTMLDivElement>();
    const characterRef = React.createRef<HTMLCanvasElement>();
    const togglePauseMenu = () => {
        pauseMenu.current?.classList.toggle('active');
        if (pauseMenu.current?.classList.contains('active')) {
            keypressWrapper.current?.focus();
        } else {
            characterRef.current?.focus();
        }
    };
    const keyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Escape') {
            togglePauseMenu();
        }
    };
    return (
        <main className="game-page">
            <div
                onKeyDown={keyDownHandler}
                role="presentation"
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
                ref={keypressWrapper}
            >
                <div className="game-page-map-container" ref={container}>
                    <Map />
                    <Character container={container} characterRef={characterRef} />
                    <GameBackButton />
                    <PauseMenu wrapperRef={pauseMenu} toggleFn={togglePauseMenu} />
                </div>
            </div>
        </main>
    );
};

export default Game;
