/* eslint-disable react/require-default-props */
import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as constants from '../constants';
import * as mapConfig from '../map/config';
import { plow, PlantOrNone } from '../store/gardenStateSlice';
import { RootState } from '../../store';

const mapState = (state: RootState) => {
    return {
        user: state.user,
        characterPosition: state.characterPosition,
        gardenState: state.gardenState,
    };
};

const mapDispatch = {
    plow,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

class Garden extends React.PureComponent<PropsFromRedux> {
    private spriteSheet: SpriteSheet;

    private canvasWidth: number;

    private canvasHeight: number;

    readonly canvas = React.createRef<HTMLCanvasElement>();

    constructor(props: PropsFromRedux) {
        super(props);
        this.spriteSheet = new SpriteSheet({
            ...config,
            ...constants,
            BOUNDARIES: mapConfig.BOUNDARIES,
        });
        this.canvasWidth = this.spriteSheet.canvasWidth;
        this.canvasHeight = this.spriteSheet.canvasHeight;
    }

    componentDidMount() {
        const { gardenState } = this.props;
        gardenState.map((plant, tileNum) => this.renderTile(tileNum, plant));
    }

    componentDidUpdate(prevProps: PropsFromRedux) {
        const { gardenState: gardenStatePrev } = prevProps;
        const { gardenState } = this.props;
        gardenState.forEach((plant, tileNum) => {
            if (plant !== gardenStatePrev[tileNum]) {
                this.renderTile(tileNum, plant);
            }
        });
    }

    private renderTile(tileNum: number, tile: PlantOrNone) {
        const { gardenState } = this.props;
        if (gardenState[tileNum] === undefined) {
            throw new Error('Tile is out of the map boundaries');
        }
        const tileType = (typeof tile === 'number') ? tile : 1;
        this.spriteSheet.drawTile(tileType, this.canvas.current, tileNum, false, true);
    }

    render() {
        return (
            <canvas
                width={this.canvasWidth}
                height={this.canvasHeight}
                ref={this.canvas}
            />
        );
    }
}

export default connector(Garden);
