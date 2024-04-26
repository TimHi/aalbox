import { ReplayGain } from './album';
import { Genre } from './genre';

export interface Song {
	id: string;
	parent: string;
	isDir: boolean;
	title: string;
	album: string;
	artist: string;
	track: number;
	year: number;
	genre: string;
	coverArt: string;
	size: number;
	contentType: string;
	suffix: string;
	duration: number;
	bitRate: number;
	path: string;
	playCount?: number;
	created: string;
	albumId: string;
	artistId: string;
	type: string;
	isVideo: boolean;
	played?: string;
	bpm: number;
	comment: string;
	sortName: string;
	mediaType: string;
	musicBrainzId: string;
	genres: Genre[];
	replayGain: ReplayGain;
}
