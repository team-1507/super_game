export const MAP_SIZE: [number, number] = [20, 20]; // rows, cols (in tiles)

/*
Этой константой можно менять размер тайла и, соответственно, масштаб на странице
Остальные размеры он сам подгонит и пересчитает.
*/
export const TILE_SIZE = 64; // in px

// number of actions you can make before day ends
export const ACTIONS_PER_DAY = 10;

export default { MAP_SIZE, TILE_SIZE, ACTIONS_PER_DAY };
