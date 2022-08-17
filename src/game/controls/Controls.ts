import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { RootState } from '../../store';
import { IUserState } from '../../store/reducers';
import { Position } from '../store/characterPositionSlice';
import { PlantOrNone } from '../store/gardenStateSlice';

export const MOVES: Record<string, [number, number]> = {
    KeyW: [-1, 0],
    KeyA: [0, -1],
    KeyS: [1, 0],
    KeyD: [0, 1],
    ArrowUp: [-1, 0],
    ArrowLeft: [0, -1],
    ArrowDown: [1, 0],
    ArrowRight: [0, 1],
};

export const HOTKEYS: Record<string, string> = {
    Digit1: 'plow',
    Digit2: 'plant',
    Digit3: 'water',
    Digit4: 'harvest',
};

interface IControls {
    readonly store: RootState,
    readonly dispatch: typeof useDispatch;
}

class Controls implements IControls {
    readonly store: RootState;

    readonly dispatch: typeof useDispatch;

    constructor(data: ControlsData) {
        this.store = {
            characterPosition: useSelector((state: RootState) => state.characterPosition),
            
        };
    }

    up() {

    }
}

export const ControlFn = new Controls();

export default ControlFn;
