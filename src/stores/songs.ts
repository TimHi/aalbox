import { defineStore } from 'pinia';

import { Songs } from 'subsonic-api';

export const useSongs = defineStore('songs', {
	state: () => ({
		randomSongs: null as Songs | null,
	}),

	actions: {
		async fetchNewRandomSongs(): Promise<Songs> {
			this.randomSongs = await this.api.getRandomSongs();
			return this.randomSongs;
		},
	},
});
