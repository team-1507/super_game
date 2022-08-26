import React, { createRef, useEffect } from 'react';
import Character from '../../game/character/Character';
import ControlsWrapper from '../../game/controls/ControlsWrapper';
import Map from '../../game/map/Map';
import Garden from '../../game/plants/Gagden';
import ActionButtons from '../../game/ui/ActionButtons';
import PauseMenu from '../../game/ui/PauseMenu';
import './Game.scss';

const Game = () => {
    const container = createRef<HTMLDivElement>();
    const pauseMenu = createRef<HTMLDivElement>();
    const controlsWrapperRef = createRef<HTMLDivElement>();
    const characterRef = createRef<HTMLCanvasElement>();
    const gardenRef = createRef<HTMLCanvasElement>();
    const togglePauseMenu = () => {
        pauseMenu.current?.classList.toggle('active');
        if (pauseMenu.current?.classList.contains('active')) {
            controlsWrapperRef.current?.focus();
        } else {
            controlsWrapperRef.current?.focus();
        }
    };

    useEffect(() => {
        controlsWrapperRef.current?.focus();
    });
    return (
        <main className="game-page">
            <ControlsWrapper
                controlsWrapperRef={controlsWrapperRef}
                gardenRef={gardenRef}
            >
                <div className="game-page-map-container" ref={container}>
                    <Map />
                    <Garden gardenRef={gardenRef} />
                    <Character container={container} characterRef={characterRef} />
                    <PauseMenu wrapperRef={pauseMenu} toggleFn={togglePauseMenu} />
                </div>
                <ActionButtons />
            </ControlsWrapper>
        </main>
    );
};

export default Game;
