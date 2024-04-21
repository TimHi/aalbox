export interface ArtistResponse {
	status: string;
	version: string;
	type: string;
	serverVersion: string;
	openSubsonic: boolean;
	artists: Artists;
}

export interface Artists {
	index: Index[];
	lastModified: number;
	ignoredArticles: string;
}

export interface Index {
	name: string;
	artist: Artist[];
}

export interface Artist {
	id: string;
	name: string;
	albumCount: number;
	coverArt: string;
	artistImageUrl: string;
}
