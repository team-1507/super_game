import React, { createRef, useEffect } from 'react';
import { notification } from 'antd';

import Character from '../../game/character/Character';
import ControlsWrapper from '../../game/controls/ControlsWrapper';
import Map from '../../game/map/Map';
import Garden from '../../game/plants/Gagden';
import PauseMenu from '../../game/ui/PauseMenu';
import Interface from '../../game/ui/Interface';
import './Game.scss';
import audio from '../../audio';
import musicFile from '../../../static/audio/music/title.ogg';
import withControls from '../../game/controls/withControls';

const music = audio({ src: musicFile, loop: true, volume: 0.3 });
const playMusic = () => {
    music.play().catch((e) => {
        notification.open({
            message: 'Error playing music',
            description: String(e),
        });
    });
    document.removeEventListener('click', playMusic);
};
if (typeof window !== 'undefined') {
    document.addEventListener('click', playMusic);
}

const Game = () => {
    const container = createRef<HTMLDivElement>();
    const pauseMenu = createRef<HTMLDivElement>();
    const controlsWrapperRef = createRef<HTMLDivElement>();
    const characterRef = createRef<HTMLCanvasElement>();
    const gardenRef = createRef<HTMLCanvasElement>();

    useEffect(() => {
        controlsWrapperRef.current?.focus();
    });

    const ControlsWrapperWithControls = withControls(ControlsWrapper, { gardenRef });

    return (
        <main className="game-page">
            <ControlsWrapperWithControls
                controlsWrapperRef={controlsWrapperRef}
            >
                <div className="game-page-map-container" ref={container}>
                    <Map />
                    <Garden gardenRef={gardenRef} />
                    <Character container={container} characterRef={characterRef} />
                </div>
                <Interface refs={{ gardenRef }} />
                <PauseMenu wrapperRef={pauseMenu} />
            </ControlsWrapperWithControls>
        </main>
    );
};

export default Game;
