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

	async getAlbums() {
		const rawArtistResponse = await axios(this.buildEndpoint('getArtists'));
		const artists = rawArtistResponse.data[
			'subsonic-response'
		] as ArtistResponse;
		console.log(artists.artists);
		return artists.artists;
	}

	//c478b22782dad27af10a55ed1135b0ba
	async stream(id: string) {
		const url = this.buildEndpoint('stream') + '&id=' + id;
		const rawStreamResponse = await axios(url);
		console.log(rawStreamResponse);
	}
}
