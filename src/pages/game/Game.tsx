import React, { createRef, KeyboardEvent } from 'react';
import Character from '../../game/character/Character';
import Controls from '../../game/controls/controls';
import Map from '../../game/map/Map';
import Garden from '../../game/plants/Gagden';
import ActionButtons from '../../game/ui/ActionButtons';
import PauseMenu from '../../game/ui/PauseMenu';
import './Game.scss';

const Game = () => {
    const container = createRef<HTMLDivElement>();
    const pauseMenu = createRef<HTMLDivElement>();
    const keypressWrapper = createRef<HTMLDivElement>();
    const characterRef = createRef<HTMLCanvasElement>();
    const controls = new Controls({
        character: characterRef,
    });
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
        controls.handleKeyPress(e);
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
                    <Garden />
                    <Character container={container} characterRef={characterRef} />
                    <PauseMenu wrapperRef={pauseMenu} toggleFn={togglePauseMenu} />
                </div>
                <ActionButtons />
            </div>
        </main>
    );
};

export default Game;
