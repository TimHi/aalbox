import { defineStore } from 'pinia';

export const useGenres = defineStore('genres', {
	state: () => ({
		genres: [],
	}),

	actions: {
		async updateGenres(): Promise<[]> {
			return [];
		},
	},
});
