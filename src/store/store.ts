import { configureStore } from '@reduxjs/toolkit';
import albumSlice from './albumSlice';
import { subSonicApi } from '../data/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import playerSlice from './playerSlice';

export const store = configureStore({
	reducer: {
		[subSonicApi.reducerPath]: subSonicApi.reducer,
		albums: albumSlice,
		player: playerSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(subSonicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
