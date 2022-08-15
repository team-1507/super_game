import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers';
import characterReducer from '../game/store/characterSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        character: characterReducer,
    },
    devTools: true,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
