import React, { HTMLProps, KeyboardEvent, RefObject } from 'react';
import { WithControlsProps } from './types';

interface ControlsWrapperProps extends WithControlsProps, HTMLProps<HTMLDivElement> {
    controlsWrapperRef: RefObject<HTMLDivElement>,
}

const ControlsWrapper = (
    props: ControlsWrapperProps,
) => {
    const { children, controlsWrapperRef, gameControls } = props;

    const keyBindings: Record<KeyboardEvent['code'], () => void> = {
        KeyW: gameControls.goUp,
        KeyA: gameControls.goLeft,
        KeyS: gameControls.goDown,
        KeyD: gameControls.goRight,
        ArrowUp: gameControls.goUp,
        ArrowLeft: gameControls.goLeft,
        ArrowDown: gameControls.goDown,
        ArrowRight: gameControls.goRight,
        Digit1: gameControls.doPlow,
        Digit2: gameControls.doPlant,
        Escape: gameControls.togglePause,
        KeyP: gameControls.togglePause,
        Tab: gameControls.loopThroughSeeds,
        KeyB: gameControls.buySelectedSeed,
        KeyM: gameControls.toggleMute,
        KeyF: gameControls.toggleFullScreen,
    };

    const keyPressHandler = (e: KeyboardEvent) => {
        const action = keyBindings[e.code];
        const isModKey = (e.altKey || e.ctrlKey || e.metaKey);

        if (!isModKey) {
            if (action) {
                e.preventDefault();
                action();
            }
        }
    };

    return (
        <div
            ref={controlsWrapperRef}
            onKeyDown={keyPressHandler}
            role="presentation"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
            tabIndex={0}
        >
            {children}
        </div>
    );
};

export default ControlsWrapper;
