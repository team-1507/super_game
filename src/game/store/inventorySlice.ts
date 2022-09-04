/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Inventory = {
    money: number;
};

const initialState: Inventory = {
    money: 100,
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        addMoney: (inventory: Inventory, { payload }: PayloadAction<number>) => {
            inventory.money += payload;
        },
    },
});

export const {
    addMoney,
} = inventorySlice.actions;

export default inventorySlice.reducer;
