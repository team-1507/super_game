/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SEED_PRICES } from '../plants/constants';

export interface Inventory {
    money: number;
    seeds: Seeds;
    isUse: keyof Seeds;
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
        buySelectedSeed: (inventory: Inventory) => {
            const selectedSeed = inventory.isUse;
            if (
                inventory.seeds[selectedSeed] < 99
                && inventory.money >= SEED_PRICES[selectedSeed]
            ) {
                inventory.seeds[selectedSeed] += 1;
                inventory.money -= SEED_PRICES[selectedSeed];
            }
        },
        decrementSelectedSeed: (inventory: Inventory) => {
            const selectedSeed = inventory.isUse;
            if (
                inventory.seeds[selectedSeed] > 0
            ) {
                inventory.seeds[selectedSeed] -= 1;
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
            inventory.isUse = nextSeedType as keyof Seeds;
        },
        takeMoney: (inventory: Inventory, { payload }: PayloadAction<number>) => {
            inventory.money += payload;
        },
    },
});

export const {
    addMoney,
    buySeed,
    buySelectedSeed,
    decrementSelectedSeed,
    selectIt,
    selectNext,
    takeMoney,
} = inventorySlice.actions;

export default inventorySlice.reducer;
