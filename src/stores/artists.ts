import { defineStore } from 'pinia';
import { Artists } from '../model/artist';

export const useArtists = defineStore('artists', {
	state: () => ({
		artists: null as Artists | null,
	}),

	actions: {
		async getArtists(): Promise<Artists> {
			this.artists = await this.api.getArtists();
			return this.artists;
		},
	},
});
