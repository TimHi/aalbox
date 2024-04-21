import axios from 'axios';
import { ArtistResponse } from '../model/artist';

export class DataService {
	private baseUrl: String;
	constructor() {
		this.baseUrl = import.meta.env.VITE_SERVER;
	}

	private buildEndpoint(endpoint: string): string {
		return `${this.baseUrl}${endpoint}.view?u=${import.meta.env.VITE_USER}&p=${
			import.meta.env.VITE_PW
		}&v=1.16.1&c=app&f=json`;
	}

	async getArtists() {
		const rawArtistResponse = await axios(this.buildEndpoint('getArtists'));
		const artists = rawArtistResponse.data[
			'subsonic-response'
		] as ArtistResponse;
		return artists.artists;
	}
}
