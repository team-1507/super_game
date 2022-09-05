import React, { createRef, useEffect } from 'react';
import Character from '../../game/character/Character';
import ControlsWrapper from '../../game/controls/ControlsWrapper';
import Map from '../../game/map/Map';
import Garden from '../../game/plants/Gagden';
import ActionButtons from '../../game/ui/ActionButtons';
import PauseMenu from '../../game/ui/PauseMenu';
import Interface from '../../game/ui/Interface';
import './Game.scss';
import audio from '../../audio';

const music = audio({ src: require('../../../static/audio/music/title.ogg'), loop: true, volume: 0.3 });
const playMusic = () => {
    music.play();
    document.removeEventListener('click', playMusic);
}

document.addEventListener('click', playMusic);

const Game = () => {
    const container = createRef<HTMLDivElement>();
    const pauseMenu = createRef<HTMLDivElement>();
    const controlsWrapperRef = createRef<HTMLDivElement>();
    const characterRef = createRef<HTMLCanvasElement>();
    const gardenRef = createRef<HTMLCanvasElement>();

    const wrapperRef = pauseMenu;

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
                </div>
                <Interface />
                <ActionButtons />
                <PauseMenu wrapperRef={wrapperRef} />
            </ControlsWrapper>
        </main>
    );
};

export default Game;
