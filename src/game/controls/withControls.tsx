/* eslint-disable react/jsx-props-no-spreading */
import React, { RefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import audio from '../../audio';
import { RootState } from '../../store';
import constants, { MINUTES_PER_PLOW, MINUTES_PER_STEP, MINUTES_PER_WATER } from '../constants';

import Cabbage from '../plants/Cabbage';
import Carrot from '../plants/Carrot';
import Pepper from '../plants/Pepper';
import Plant from '../plants/Plant';
import Potato from '../plants/Potato';
import Squash from '../plants/Squash';
import Tomato from '../plants/Tomato';

import { mapHelper } from '../SpriteSheet';
import {
    down, left, right, up,
} from '../store/characterPositionSlice';
import { plant, harvest } from '../store/gardenStateSlice';
import {
    buySelectedSeed, decrementSelectedSeed, Inventory, Seeds, selectNext, addMoney,
} from '../store/inventorySlice';
import {
    plow, water, plowedEarthTileType, waterEarthTileType,
} from '../store/mapStateSlice';
import { addAction, addMove, incrementTimestamp } from '../store/timerSlice';
import { toggleMute, togglePause } from '../store/uiSlice';
import { WithControlsProps } from './types';

const withControls = <T extends WithControlsProps = WithControlsProps>(
    WrappedComponent: React.ComponentType<T>,
    refs: Record<string, RefObject<HTMLCanvasElement>>,
) => (
    props: Omit<T, keyof WithControlsProps>,
) => {
    const { gardenRef } = refs;

    const currentCharacterPosition = useSelector((state: RootState) => state.characterPosition);
    const inventory: Inventory = useSelector((state: RootState) => state.inventory);
    const map = useSelector((state: RootState) => state.mapState);
    const garden = useSelector((state: RootState) => state.gardenState);
    const timer = useSelector((state: RootState) => state.timer);

    const dispatch = useDispatch();

    const plantClasses: Record<keyof Seeds, (canvasElement: HTMLCanvasElement | null) => Plant> = {
        tomato: (c) => new Tomato(c, timer.timestamp),
        potato: (c) => new Potato(c, timer.timestamp),
        carrot: (c) => new Carrot(c, timer.timestamp),
        cabbage: (c) => new Cabbage(c, timer.timestamp),
        pepper: (c) => new Pepper(c, timer.timestamp),
        squash: (c) => new Squash(c, timer.timestamp),
    };

    const getCurrentCharacterTileNum = () => mapHelper.coordsToTileNum(
        currentCharacterPosition.coords,
    );

    const ifCanPlowHere = () => map[1][getCurrentCharacterTileNum()] === 0;

    const ifCanWaterHere = () => map[1][getCurrentCharacterTileNum()] === plowedEarthTileType;

    const ifTileIsSoil = () => [
        plowedEarthTileType,
        waterEarthTileType,
    ].includes(map[1][getCurrentCharacterTileNum()]);

    const ifNoPlantOnTile = () => garden[getCurrentCharacterTileNum()] === 0;

    const ifCanPlantHere = () => ifTileIsSoil() && ifNoPlantOnTile();

    const ifCanHarvestHere = () => !ifNoPlantOnTile();

    const ifHasSeedInInventory = () => inventory.seeds[inventory.isUse] > 0;

    const gameControls = {
        goUp: () => {
            audio({ src: constants.SOUNDS.steps });
            dispatch(incrementTimestamp(MINUTES_PER_STEP));
            dispatch(addMove());
            dispatch(up());
        },
        goDown: () => {
            audio({ src: constants.SOUNDS.steps });
            dispatch(incrementTimestamp(MINUTES_PER_STEP));
            dispatch(addMove());
            dispatch(down());
        },
        goLeft: () => {
            audio({ src: constants.SOUNDS.steps });
            dispatch(incrementTimestamp(MINUTES_PER_STEP));
            dispatch(addMove());
            dispatch(left());
        },
        goRight: () => {
            audio({ src: constants.SOUNDS.steps });
            dispatch(incrementTimestamp(MINUTES_PER_STEP));
            dispatch(addMove());
            dispatch(right());
        },
        doPlow: () => {
            if (!ifCanPlowHere()) {
                return;
            }
            dispatch(incrementTimestamp(MINUTES_PER_PLOW));
            dispatch(addAction());
            dispatch(
                plow(getCurrentCharacterTileNum()),
            );
        },
        doPlant: () => {
            if (!ifCanPlantHere()) {
                return;
            }
            if (!ifHasSeedInInventory()) {
                return;
            }
            dispatch(addAction());
            dispatch(decrementSelectedSeed());
            const plantingPlant = plantClasses[inventory.isUse](gardenRef.current);
            dispatch(incrementTimestamp(plantingPlant.plantingTime));
            dispatch(
                plant({
                    plant: plantingPlant,
                    tileNum: getCurrentCharacterTileNum(),
                }),
            );
        },
        doWater: () => {
            if (!ifCanWaterHere()) return;
            dispatch(addAction());
            dispatch(incrementTimestamp(MINUTES_PER_WATER));
            dispatch(
                water(getCurrentCharacterTileNum()),
            );
        },
        doHarvest: () => {
            if (!ifCanHarvestHere()) return;
            dispatch(addAction());
            dispatch(
                harvest({ tileNum: getCurrentCharacterTileNum() }),
            );
            const harvestedPlant = garden[getCurrentCharacterTileNum()];
            if (!(harvestedPlant instanceof Plant)) {
                throw new Error('Can\'t find a plant here');
            }
            dispatch(addMoney(harvestedPlant.sellingPrice));
        },
        togglePause: () => {
            dispatch(togglePause());
        },
        toggleMute: () => {
            dispatch(toggleMute());
        },
        loopThroughSeeds: () => {
            dispatch(selectNext());
        },
        buySelectedSeed: () => {
            dispatch(buySelectedSeed());
        },
        toggleFullScreen: async () => {
            const fsElem = document.fullscreenElement;
            if (fsElem) {
                await document.exitFullscreen();
            } else {
                await document.body.requestFullscreen();
            }
        },
    };

    return (
        <WrappedComponent {...props as T} gameControls={gameControls} />
    );
};

export default withControls;
