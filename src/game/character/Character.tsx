import React, {
    RefObject, useEffect, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as constants from '../constants';
import * as mapConfig from '../map/config';

import './Character.scss';

type CharacterProps = {
    container: RefObject<HTMLElement>,
    characterRef: RefObject<HTMLCanvasElement>,
};

const Character = (props: CharacterProps) => {
    const { container, characterRef } = props;
    const spriteSheet = useMemo(() => new SpriteSheet({
        ...config,
        ...constants,
        BOUNDARIES: mapConfig.BOUNDARIES,
    }), []);
    const { canvasWidth, canvasHeight } = spriteSheet;
    const currentPosition = useSelector((state: RootState) => state.characterPosition);
    const dispatch = useDispatch();

    useEffect(() => {
        const scrollToFitCharacter = () => {
            if (!container.current) {
                return;
            }
            const charPosOnScreen = {
                top: (currentPosition.coords[0] + 3) * constants.TILE_SIZE,
                left: (currentPosition.coords[1] + 3) * constants.TILE_SIZE,
            };

            if (charPosOnScreen.left > window.innerWidth) {
                container.current.style.marginLeft = `${window.innerWidth - charPosOnScreen.left}px`;
            } else {
                container.current.style.marginLeft = '0px';
            }
            if (charPosOnScreen.top > window.innerHeight) {
                container.current.style.marginTop = `${window.innerHeight - charPosOnScreen.top}px`;
            } else {
                container.current.style.marginTop = '0px';
            }
        };

        const drawFrame = () => {
            scrollToFitCharacter();
            spriteSheet.drawTile(
                currentPosition.direction,
                characterRef.current,
                currentPosition.coords,
                true,
            );
        };

        window.requestAnimationFrame(drawFrame);
    }, [
        currentPosition,
        characterRef,
        spriteSheet,
        canvasHeight,
        canvasWidth,
        container,
        dispatch,
    ]);
    return (
        <canvas
            ref={characterRef}
            id="ivan"
            width={canvasWidth}
            height={canvasHeight}
        />
    );
};

export default Character;
