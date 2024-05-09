import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Song } from '../model/song';

interface PlayerState {
	currentSong: Song | undefined;
}

const initialState: PlayerState = {
	currentSong: undefined,
};

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setCurrentSong: (state, action: PayloadAction<Song>) => {
			state.currentSong = action.payload;
		},
	},
});

const selectPlayerState = (state: RootState) => state.player;
export const selectCurrentSong = createSelector(
	selectPlayerState,
	(playerState) => playerState.currentSong
);
export const { setCurrentSong } = playerSlice.actions;

export default playerSlice.reducer;
