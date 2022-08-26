export interface ISpriteSheet {
    SPRITE_SHEET: string,
    SPRITE_SIZE: {
        width: number,
        height: number,
        gap: number,
    },
    ASSET_TILE_TYPES: Record<number, string>,
    ASSET_TILE_COORDS: Record<string, [number, number]>,
    MAP_SIZE: [number, number],
    TILE_SIZE: number,
}
export class SpriteSheet implements ISpriteSheet {
    SPRITE_SHEET: string;

    SPRITE_SIZE: {
        width: number,
        height: number,
        gap: number,
    };

    ASSET_TILE_TYPES: Record<number, string>;

    ASSET_TILE_COORDS: Record<string, [number, number]>;

    MAP_SIZE: [number, number];

    TILE_SIZE: number;

    private sptitesheetImageElement: HTMLImageElement;

    readonly canvasWidth: number;

    readonly canvasHeight: number;

    readonly spriteScale: number;

    readonly spriteOffset: { x: number, y: number };

    constructor(config: ISpriteSheet) {
        this.SPRITE_SHEET = config.SPRITE_SHEET;
        this.SPRITE_SIZE = config.SPRITE_SIZE;
        this.ASSET_TILE_TYPES = config.ASSET_TILE_TYPES;
        this.ASSET_TILE_COORDS = config.ASSET_TILE_COORDS;
        this.MAP_SIZE = config.MAP_SIZE;
        this.TILE_SIZE = config.TILE_SIZE;
        this.sptitesheetImageElement = new Image();
        this.sptitesheetImageElement.src = this.SPRITE_SHEET;
        this.canvasWidth = this.TILE_SIZE * this.MAP_SIZE[1];
        this.canvasHeight = this.TILE_SIZE * this.MAP_SIZE[0];
        this.spriteScale = this.getSpriteScale();
        this.spriteOffset = this.getSpriteOffset();
    }

    private getTileCoordsOnSptiteSheet(tileType: number) {
        const [row, coloumn] = this.ASSET_TILE_COORDS[this.ASSET_TILE_TYPES[tileType]];
        const sourceX = (coloumn - 1) * (this.SPRITE_SIZE.width + this.SPRITE_SIZE.gap);
        const sourceY = (row - 1) * (this.SPRITE_SIZE.height + this.SPRITE_SIZE.gap);
        return {
            sourceX,
            sourceY,
            sourceWidth: this.SPRITE_SIZE.width,
            sourceHeight: this.SPRITE_SIZE.height,
        };
    }

    private getSpriteScale() {
        if (
            this.SPRITE_SIZE.width === this.SPRITE_SIZE.height
            || this.SPRITE_SIZE.width > this.SPRITE_SIZE.height
        ) {
            return this.TILE_SIZE / this.SPRITE_SIZE.width;
        }
        return this.TILE_SIZE / this.SPRITE_SIZE.height;
    }

    private getSpriteOffset() {
        if (this.SPRITE_SIZE.width === this.SPRITE_SIZE.height) {
            return {
                x: 0,
                y: 0,
            };
        }
        if (this.SPRITE_SIZE.width > this.SPRITE_SIZE.height) {
            return {
                x: 0,
                y: (this.TILE_SIZE - (this.SPRITE_SIZE.height * this.spriteScale)) / 2,
            };
        }
        return {
            x: (this.TILE_SIZE - (this.SPRITE_SIZE.width * this.spriteScale)) / 2,
            y: 0,
        };
    }

    public tileNumToCoords(tileNum: number) {
        const row = Math.ceil((tileNum + 1) / this.MAP_SIZE[1]);
        const col = (tileNum % this.MAP_SIZE[1]) + 1;
        return [row, col]; // from 1
    }

    public coordsToTileNum(coords: [number, number]) {
        const [row, col] = coords;
        const tileNum = (row - 1) * this.MAP_SIZE[1] + col - 1;
        return tileNum; // from 0;
    }

    public drawTile(
        tileType: number,
        canvas: HTMLCanvasElement | null,
        position: number | [number, number] = 0,
        crearBeforeDraw = false,
    ) {
        const img = this.sptitesheetImageElement.cloneNode() as HTMLImageElement;
        const ctx = canvas?.getContext('2d');
        let [row, col] = [1, 1];
        if (typeof position === 'number') {
            [row, col] = this.tileNumToCoords(position);
        } else if (Array.isArray(position)) {
            [row, col] = position;
        }
        const {
            sourceX, sourceY, sourceWidth, sourceHeight,
        } = this.getTileCoordsOnSptiteSheet(tileType);
        const [
            destX,
            destY,
            destWidth,
            destHeight,
        ] = [
            this.TILE_SIZE * (col - 1) + this.spriteOffset.x,
            this.TILE_SIZE * (row - 1) + this.spriteOffset.y,
            this.SPRITE_SIZE.width * this.spriteScale,
            this.SPRITE_SIZE.height * this.spriteScale,
        ];
        img.onload = () => {
            if (!ctx) {
                return canvas;
            }
            ctx.imageSmoothingEnabled = false;
            if (crearBeforeDraw) {
                ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            }
            return ctx.drawImage(
                img,
                sourceX,
                sourceY,
                sourceWidth,
                sourceHeight,
                destX,
                destY,
                destWidth,
                destHeight,
            );
        };
        return canvas;
    }
}

export default SpriteSheet;
