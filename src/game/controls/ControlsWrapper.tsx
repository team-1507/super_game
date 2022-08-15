import React, { HTMLProps, KeyboardEvent, RefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { MOVES } from '../constants';
import { Position, setPosition } from '../store/characterPositionSlice';

const ControlsWrapper = (
    props: HTMLProps<HTMLDivElement> & { controlsWrapperRef: RefObject<HTMLDivElement> },
) => {
    const { children, controlsWrapperRef } = props;

    const currentCharacterPosition = useSelector((state: RootState) => state.characterPosition);
    const dispatch = useDispatch();

    const keyPressHandler = (e: KeyboardEvent) => {
        const move = MOVES[e.code];
        const isModKey = (e.altKey || e.ctrlKey || e.metaKey);
        if (move && !isModKey) {
            e.preventDefault();
            const newPosition: Position = {
                coords: [
                    currentCharacterPosition.coords[0] + move[0],
                    currentCharacterPosition.coords[1] + move[1],
                ],
                direction: currentCharacterPosition.direction,
            };
            dispatch(setPosition(newPosition));
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
