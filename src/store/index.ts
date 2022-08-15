import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers';
import characterPositionReducer from '../game/store/characterPositionSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        characterPosition: characterPositionReducer,
    },
    devTools: true,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
