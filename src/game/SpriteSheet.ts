interface ISpriteSheet {
    SPRITE_SHEET: string,
    TILE_SIZE: {
        width: number,
        height: number,
        gap: number,
        scale: number,
    },
    ASSET_TILE_TYPES: Record<number, string>,
    ASSET_TILE_COORDS: Record<string, [number, number]>,
    MAP_DIMENSIONS?: {
        width: number;
        height: number;
    },
}
export class SpriteSheet implements ISpriteSheet {
    SPRITE_SHEET: string;

    TILE_SIZE: {
        width: number,
        height: number,
        gap: number,
        scale: number,
    };

    ASSET_TILE_TYPES: Record<number, string>;

    ASSET_TILE_COORDS: Record<string, [number, number]>;

    MAP_DIMENSIONS?: {
        width: number;
        height: number;
    };

    private sptitesheetImageElement: HTMLImageElement;

    constructor(config: ISpriteSheet) {
        this.SPRITE_SHEET = config.SPRITE_SHEET;
        this.TILE_SIZE = config.TILE_SIZE;
        this.ASSET_TILE_TYPES = config.ASSET_TILE_TYPES;
        this.ASSET_TILE_COORDS = config.ASSET_TILE_COORDS;
        this.MAP_DIMENSIONS = config.MAP_DIMENSIONS;
        this.sptitesheetImageElement = new Image();
        this.sptitesheetImageElement.src = this.SPRITE_SHEET;
    }

    private getTileCoordsOnSptiteSheet(tileType: number) {
        const [row, coloumn] = this.ASSET_TILE_COORDS[this.ASSET_TILE_TYPES[tileType]];
        const sourceX = (coloumn - 1) * (this.TILE_SIZE.width + this.TILE_SIZE.gap);
        const sourceY = (row - 1) * (this.TILE_SIZE.height + this.TILE_SIZE.gap);
        return {
            sourceX,
            sourceY,
            sourceWidth: this.TILE_SIZE.width,
            sourceHeight: this.TILE_SIZE.height,
        };
    }

    public drawTile(tileType: number, canvas: HTMLCanvasElement | null, tileNumber = 0) {
        const img = this.sptitesheetImageElement.cloneNode() as HTMLImageElement;
        const ctx = canvas?.getContext('2d');
        let [row, col] = [1, 1];
        if (this.MAP_DIMENSIONS) {
            row = Math.ceil((tileNumber + 1) / this.MAP_DIMENSIONS.width);
            col = (tileNumber % this.MAP_DIMENSIONS.width) + 1;
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
            (this.TILE_SIZE.height * this.TILE_SIZE.scale) * (col - 1),
            (this.TILE_SIZE.width * this.TILE_SIZE.scale) * (row - 1),
            this.TILE_SIZE.width * this.TILE_SIZE.scale,
            this.TILE_SIZE.height * this.TILE_SIZE.scale,
        ];
        img.onload = () => {
            if (!ctx) {
                return canvas;
            }
            ctx.imageSmoothingEnabled = false;
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
