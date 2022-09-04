import { configureStore } from '@reduxjs/toolkit';
import { userReducer, leaderboardReducer } from './reducers';
import characterPositionReducer from '../game/store/characterPositionSlice';
import gardenStateReducer from '../game/store/gardenStateSlice';
import mapStateReducer from '../game/store/mapStateSlice';
import timerReducer from '../game/store/timerSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        leaderboard: leaderboardReducer,
        characterPosition: characterPositionReducer,
        gardenState: gardenStateReducer,
        mapState: mapStateReducer,
        timer: timerReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActionPaths: ['payload.plant'],
            ignoredPaths: ['gardenState'],
        },
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
