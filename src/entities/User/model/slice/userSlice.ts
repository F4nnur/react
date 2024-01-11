import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';

const initialState: UserSchema = {};

export const userrSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userrSlice;
export const { reducer: userReducer } = userrSlice;
