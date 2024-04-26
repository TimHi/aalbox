import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface PlayerState {
	currentSong: string;
}

const initialState: PlayerState = {
	currentSong: '',
};

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		setCurrentSong: (state, action: PayloadAction<string>) => {
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
