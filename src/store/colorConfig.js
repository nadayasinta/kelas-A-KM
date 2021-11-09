import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataToServer = createAsyncThunk(
    'colorConfig/getDataToServer',
    async (data, thunkAPI) => {
        console.log(data);
        return await fetch(
            'https://6141c998357db50017b3dd1b.mockapi.io/kampus_merdeka',
            { method: 'GET' }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw Error;
            })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    }
);

export const colorConfigSlice = createSlice({
    name: 'colorConfig',
    initialState: {
        darkMode: false,
        color: 'black',
        fontSize: 14,
        requestStatus: '',
    },
    reducers: {
        changeDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            state.color = state.darkMode ? 'black' : 'white';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataToServer.pending, (state, action) => {
                state.requestStatus = 'Loading';
            })
            .addCase(getDataToServer.fulfilled, (state, action) => {
                state.requestStatus = action.payload.message;
            });
    },
});

export const { changeDarkMode } = colorConfigSlice.actions;
