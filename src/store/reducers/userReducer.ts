/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserApi from '../../api/user/user';
import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import type { RootState } from '..';
import { getAvatar } from '../helpers';

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (thunkAPI) => {
        const response = await UserApi.getCurrentUser()
        return response
    },
);

export interface IUserData {
    avatar?: string
    first_name?: string
    second_name?: string
    login: string
    email: string
    password?: string
    phone?: string
}

export interface IUserState {
    data: IUserData
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: SerializedError | null
}

export const initialState: IUserState = {
    data: {
        avatar: '',
        first_name: '',
        second_name: '',
        login: '',
        email: '',
        password: '',
        phone: '',
    },
    status: 'idle',
    error: null

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserData>) => {
            const { login, email, avatar } = action.payload;
            const { data } = state;
            data.login = login;
            data.email = email;
            data.avatar = getAvatar(avatar);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
          if (state.status === 'idle') {
            state.status = 'loading';
          }
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data = Object.assign({}, state.data, action.payload);
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error;
        })
    },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state;
export default userSlice.reducer;
