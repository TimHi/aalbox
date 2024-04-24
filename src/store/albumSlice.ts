import { createSlice } from '@reduxjs/toolkit';
import { Album } from '../model/album';

interface AlbumState {
	allAlbums: Album[];
}

const initialState: AlbumState = {
	allAlbums: [],
};

export const albumSlice = createSlice({
	name: 'album',
	initialState,
	reducers: {},
});

export const {} = albumSlice.actions;

export default albumSlice.reducer;
