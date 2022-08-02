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

    sptitesheetImageElement: HTMLImageElement;

    constructor(config: ISpriteSheet) {
        this.SPRITE_SHEET = config.SPRITE_SHEET;
        this.TILE_SIZE = config.TILE_SIZE;
        this.ASSET_TILE_TYPES = config.ASSET_TILE_TYPES;
        this.ASSET_TILE_COORDS = config.ASSET_TILE_COORDS;
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

    public drawTile(tileType: number, canvas: HTMLCanvasElement | null) {
        const img = this.sptitesheetImageElement.cloneNode() as HTMLImageElement;
        const ctx = canvas?.getContext('2d');
        const {
            sourceX, sourceY, sourceWidth, sourceHeight,
        } = this.getTileCoordsOnSptiteSheet(tileType);
        const [
            destX,
            destY,
            destWidth,
            destHeight,
        ] = [
            0,
            0,
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

// export function getTileCoordsOnSptiteSheet(tileType: number) {
//     const [row, coloumn] = ASSET_TILE_COORDS[ASSET_TILE_TYPES[tileType]];
//     const sourceX = (coloumn - 1) * (TILE_SIZE.width + TILE_SIZE.gap);
//     const sourceY = (row - 1) * (TILE_SIZE.height + TILE_SIZE.gap);
//     return {
//         sourceX,
//         sourceY,
//         sourceWidth: TILE_SIZE.width,
//         sourceHeight: TILE_SIZE.height,
//     };
// }

// const sptitesheetImageElement = new Image();
// sptitesheetImageElement.src = SPRITE_SHEET;

// export function drawTile(tileType: number, canvas: HTMLCanvasElement | null) {
//     const img = sptitesheetImageElement.cloneNode() as HTMLImageElement;
//     const ctx = canvas?.getContext('2d');
//     const {
//         sourceX, sourceY, sourceWidth, sourceHeight,
//     } = getTileCoordsOnSptiteSheet(tileType);
//     const [
//         destX, destY, destWidth, destHeight,
//     ] = [
//         0, 0, TILE_SIZE.width * TILE_SIZE.scale, TILE_SIZE.height * TILE_SIZE.scale,
//     ];
//     img.onload = () => {
//         if (!ctx) {
//             return canvas;
//         }
//         ctx.imageSmoothingEnabled = false;
//         return ctx.drawImage(
//             img,
//             sourceX,
//             sourceY,
//             sourceWidth,
//             sourceHeight,
//             destX,
//             destY,
//             destWidth,
//             destHeight,
//         );
//     };
//     return canvas;
// }

export default SpriteSheet;
