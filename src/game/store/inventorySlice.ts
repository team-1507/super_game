/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SEED_PRICES } from '../plants/constants';

interface Inventory {
    money: number;
    seeds: Seeds;
    isUse: string;
}

export interface Seeds {
    tomato: number;
    potato: number;
    carrot: number;
    cabbage: number;
    pepper: number;
    squash: number;
}

const initialSeeds: Seeds = {
    tomato: 0,
    potato: 0,
    carrot: 0,
    cabbage: 0,
    pepper: 0,
    squash: 0,
};

const initialState: Inventory = {
    money: 100,
    seeds: initialSeeds,
    isUse: 'tomato',
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
        selectIt: (inventory: Inventory, { payload }: PayloadAction<keyof Seeds>) => {
            inventory.isUse = payload;
        },
        selectNext: (inventory: Inventory) => {
            const seedTypes = Object.keys(inventory.seeds);
            const currentInUseKey = seedTypes.findIndex((v) => (v === inventory.isUse));
            const nextSeedType = (currentInUseKey + 1 === seedTypes.length)
                ? seedTypes[0] : seedTypes[currentInUseKey + 1];
            inventory.isUse = nextSeedType;
        },
    },
});

export const {
    addMoney,
    buySeed,
    selectIt,
    selectNext,
} = inventorySlice.actions;

export default inventorySlice.reducer;
