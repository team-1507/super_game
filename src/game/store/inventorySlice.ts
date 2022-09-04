/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SEED_PRICES } from '../plants/constants';

interface Inventory {
    money: number;
    seeds: Seeds;
    isUse: string;
};

export interface Seeds {
    tomato: number;
    potato: number;
    carrot: number;
    cabbage: number;
    pepper: number;
    squash: number;
};

const initialState: Inventory = {
    money: 100,
    seeds: {
        tomato: 0,
        potato: 0,
        carrot: 0,
        cabbage: 0,
        pepper: 0,
        squash: 0,
    },
    isUse: '',
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        addMoney: (inventory: Inventory, { payload }: PayloadAction<number>) => {
            inventory.money += payload;
        },
        buySeed: (inventory: Inventory, { payload }: PayloadAction<keyof Seeds>) => {
            if (inventory.seeds[payload] < 99 && inventory.money >= SEED_PRICES[payload]) {
                inventory.seeds[payload] += 1;
                inventory.money -= SEED_PRICES[payload];
            }
        },
        useIt: (inventory: Inventory, { payload }: PayloadAction<keyof Seeds>) => {
            inventory.isUse = payload;
        },
    },
});

export const {
    addMoney,
    buySeed,
    useIt,
} = inventorySlice.actions;

export default inventorySlice.reducer;
