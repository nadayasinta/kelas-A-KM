import { configureStore } from '@reduxjs/toolkit';
import { colorConfigSlice } from './colorConfig';

const store = configureStore({
    reducer: {
        colorConfig: colorConfigSlice.reducer,
    },
});

export { store };
