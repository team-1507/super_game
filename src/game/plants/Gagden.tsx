import React, { HTMLProps } from 'react';
import { SpriteSheet } from '../SpriteSheet';
import * as config from './config';
import * as constants from '../constants';
import Plant from './Plant';

type PlantOrNone = Plant | 0 | 1;

class Garden extends React.PureComponent {
    private spriteSheet: SpriteSheet;

    private canvasWidth: number;

    private canvasHeight: number;

    private plants: PlantOrNone[] = [];

    readonly canvas = React.createRef<HTMLCanvasElement>();

    constructor(props: HTMLProps<HTMLCanvasElement>) {
        super(props);
        this.spriteSheet = new SpriteSheet({ ...config, ...constants });
        this.canvasWidth = this.spriteSheet.canvasWidth;
        this.canvasHeight = this.spriteSheet.canvasHeight;
        const mapLength = constants.MAP_SIZE[0] * constants.MAP_SIZE[1];
        this.plants.length = mapLength;
        this.plants.fill(0);
    }

    componentDidMount() {
        this.plants.map((plant, tileNum) => this.renderTile(tileNum, plant));
    }

    componentDidUpdate() {

    }

    // eslint-disable-next-line react/no-unused-class-component-methods
    public plow(coords: [number, number]) {
        const tileNum = this.spriteSheet.coordsToTileNum(coords);
        this.plants[tileNum] = 1;
    }

    private renderTile(tileNum: number, tile: PlantOrNone) {
        if (this.plants[tileNum] === undefined) {
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

export default Garden;
