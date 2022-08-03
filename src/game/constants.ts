export const MAP_SIZE: [number, number] = [20, 20]; // rows, cols (in tiles)

export const TILE_SIZE = 64; // in px

export const MOVES: Record<string, [number, number]> = {
    KeyW: [-1, 0],
    KeyA: [0, -1],
    KeyS: [1, 0],
    KeyD: [0, 1],
};

export default { MAP_SIZE, TILE_SIZE, MOVES };
