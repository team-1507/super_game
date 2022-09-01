/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import LeaderboardApi from '../../api/leaderboard/leaderboard';
import { CURSOR, LIMIT, RATING_FIELD_NAME } from '../../api/leaderboard/constants';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import type { RootState } from '..';

export const fetchLeaderboard = createAsyncThunk(
    'leaderboard/fetchByTeamName',
    async (thunkAPI) => {
        const body = { cursor: CURSOR, limit: LIMIT, ratingFieldName: RATING_FIELD_NAME };
        return await LeaderboardApi.getLeaderboard(body);
    }
);

export interface ILeaderboardItemState {
    data?: {
        name: string
        score: number
        time: number
    }
};

export interface ILeaderboardState {
    data: ILeaderboardItemState[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: SerializedError | null
};

export const initialState: ILeaderboardState = {
    data: [],
    status: 'idle',
    error: null
};

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        setLeaderboard: (state, action: PayloadAction<ILeaderboardItemState[]>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLeaderboard.pending, (state, action) => {
          if (state.status === 'idle') {
            state.status = 'loading';
          }
        })
        builder.addCase(fetchLeaderboard.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        builder.addCase(fetchLeaderboard.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        })
    },
});

export const { setLeaderboard } = leaderboardSlice.actions;
export const selectLeaderboard = (state: RootState) => state;
export default leaderboardSlice.reducer;
