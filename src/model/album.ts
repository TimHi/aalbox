import { Genre } from './genre';
import { Song } from './song';

export interface AlbumsListResponse {
	status: string;
	version: string;
	type: string;
	serverVersion: string;
	openSubsonic: boolean;
	albumList: AlbumList;
}

export interface AlbumDetailResponse {
	status: string;
	version: string;
	type: string;
	serverVersion: string;
	openSubsonic: boolean;
	album: AlbumDetail;
}

export interface AlbumDetail {
	id: string;
	name: string;
	artist: string;
	artistId: string;
	coverArt: string;
	songCount: number;
	duration: number;
	playCount: number;
	created: string;
	year: number;
	genre: string;
	played: string;
	userRating: number;
	genres: Genre[];
	musicBrainzId: string;
	isCompilation: boolean;
	sortName: string;
	discTitles: any[];
	originalReleaseDate: OriginalReleaseDate;
	song: Song[];
}

export interface OriginalReleaseDate {}

export interface AlbumList {
	album: Album[];
}

export interface FullAlbum extends Album {
	cover: string;
}

export interface Album {
	id: string;
	parent: string;
	isDir: boolean;
	title: string;
	name: string;
	album: string;
	artist: string;
	year?: number;
	genre?: string;
	coverArt: string;
	duration: number;
	playCount?: number;
	created: string;
	artistId: string;
	songCount: number;
	isVideo: boolean;
	played?: string;
	bpm: number;
	comment: string;
	sortName: string;
	mediaType: string;
	musicBrainzId: string;
	genres: any[];
	replayGain: ReplayGain;
}

export interface ReplayGain {}
