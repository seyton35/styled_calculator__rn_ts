import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialization = createAsyncThunk(
    'state/initialization',
    async (_, { dispatch }) => {
        try {
        } catch (e) {
            console.log(e.message);
        }
    }
)

const stateSlice = createSlice({
    name: 'state',
    initialState: {
        version: '1.0.0',
        toastAndroidMessage: null,
        error: null,
    },
    reducers: {
        setToastAndroidMessage: (state, action) => {
            state.toastAndroidMessage = action.payload
        },
        setErrorMessage: (state, action) => {
            state.error = action.payload
        },
    },
    extraReducers: builder => { }
})

export const {
    setToastAndroidMessage,
    setErrorMessage,
} = stateSlice.actions


export default stateSlice.reducer