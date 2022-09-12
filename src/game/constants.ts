import stepSound from '../../static/audio/sounds/step-one.ogg';

export const MAP_SIZE: [number, number] = [20, 20]; // rows, cols (in tiles)

/*
Этой константой можно менять размер тайла и, соответственно, масштаб на странице
Остальные размеры он сам подгонит и пересчитает.
*/
export const TILE_SIZE = 64; // in px

// autoscroll screen when left less then x tiles
export const SIDESPACE = 6;

export const SOUNDS = {
    steps: stepSound,
};

// one step takes x miutes
export const MINUTES_PER_STEP = 5;
export const MINUTES_PER_PLOW = 30;
export const MINUTES_PER_WATER = 15;

export const DAILY_TAX = 25; // RUB

export const SUNRISE_TIMESTAMP = 60 * 10; // 10:00 am
export const SUNSET_TIMESTAMP = 60 * 18; // 06:00 pm

export default {
    MAP_SIZE,
    TILE_SIZE,
    SOUNDS,
    SIDESPACE,
    MINUTES_PER_STEP,
    MINUTES_PER_PLOW,
    MINUTES_PER_WATER,
    DAILY_TAX,
    SUNRISE_TIMESTAMP,
    SUNSET_TIMESTAMP,
};
