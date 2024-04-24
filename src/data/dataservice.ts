import axios from 'axios';
import { ArtistResponse } from '../model/artist';
import { Album, AlbumsListResponse, FullAlbum } from '../model/album';

export class DataService {
	private baseUrl: String;
	constructor() {
		this.baseUrl = import.meta.env.VITE_SERVER;
	}

	static buildEndpoint(endpoint: string): string {
		return `${import.meta.env.VITE_SERVER}${endpoint}.view?u=${
			import.meta.env.VITE_USER
		}&p=${DataService.fixedEncodeURIComponent(
			import.meta.env.VITE_PW
		)}&v=1.16.1&c=app&f=json`;
	}
	static fixedEncodeURIComponent(str: string) {
		return encodeURIComponent(str).replace(/[!'()*]/g, escape);
	}

	static buildEndpointWithParameters(
		endpoint: string,
		parameter: string
	): string {
		const url = `${import.meta.env.VITE_SERVER}${endpoint}.view?u=${
			import.meta.env.VITE_USER
		}&p=${DataService.fixedEncodeURIComponent(
			import.meta.env.VITE_PW
		)}&v=1.16.1&c=app&f=json${parameter}`;
		return url;
	}

	async getArtists() {
		const rawArtistResponse = await axios(
			DataService.buildEndpoint('getArtists')
		);
		const artists = rawArtistResponse.data[
			'subsonic-response'
		] as ArtistResponse;
		return artists.artists;
	}

	async getCoverArt(id: string) {
		const url = `${DataService.buildEndpoint('getCoverArt')}&id=${id}`;
		const rawCoverArt = await axios(url);
		return rawCoverArt.data as string;
	}

	/**
	 * https://subsonic.org/pages/api.jsp#getAlbumList
	 * @param offset pagination
	 * @param size 500 max
	 * @returns
	 */
	async getAlbums(offset: number, size: number): Promise<Album[]> {
		const url = `${DataService.buildEndpoint(
			'getAlbumList'
		)}&size=${size}&offset=${offset}&type=alphabeticalByName`;
		const rawAlbumResponse = await axios(url);
		const albums = rawAlbumResponse.data[
			'subsonic-response'
		] as AlbumsListResponse;

		return albums.albumList.album;
	}

	/**
	 * https://subsonic.org/pages/api.jsp#getCoverArt
	 * @param id
	 * @param size
	 * @returns
	 */
	buildGetCoverUrl(id: string, size: number) {
		return `${DataService.buildEndpoint('getCoverArt')}&id=${id}&size=${size}`;
	}

	async getFullAlbum(album: Album[]): Promise<FullAlbum[]> {
		const fullAlbums: FullAlbum[] = [];
		await album.forEach(async (album) => {
			const cover = await this.getCoverArt(album.coverArt);
			fullAlbums.push({ ...album, cover: cover });
		});
		return fullAlbums;
	}

	async getAllAlbums(): Promise<Album[]> {
		const allAlbums: Album[] = [];
		let albumsFetched = false;
		let offset = 0;
		let batchSize = 100;
		while (!albumsFetched) {
			const albums = await this.getAlbums(offset, batchSize);
			offset += batchSize;
			if (albums === undefined) {
				albumsFetched = true;
			} else {
				allAlbums.push(...albums);
			}
		}
		return allAlbums;
	}

	//c478b22782dad27af10a55ed1135b0ba
	async stream(id: string) {
		const url = DataService.buildEndpoint('stream') + '&id=' + id;
		const rawStreamResponse = await axios(url);
		console.log(rawStreamResponse);
	}
}
