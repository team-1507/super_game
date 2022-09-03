import React, { createRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { togglePause } from '../../game/store/uiSlice';
import Character from '../../game/character/Character';
import ControlsWrapper from '../../game/controls/ControlsWrapper';
import Map from '../../game/map/Map';
import Garden from '../../game/plants/Gagden';
import ActionButtons from '../../game/ui/ActionButtons';
import PauseMenu from '../../game/ui/PauseMenu';
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
    const { pauseMenu: isPause } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    const togglePauseMenu = () => dispatch(togglePause());

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
                <ActionButtons />
                <PauseMenu active={isPause} wrapperRef={pauseMenu} toggleFn={togglePauseMenu} />
            </ControlsWrapper>
        </main>
    );
};

export default Game;
