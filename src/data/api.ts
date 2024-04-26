import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	Album,
	AlbumDetail,
	AlbumDetailResponse,
	AlbumsListResponse,
} from '../model/album';
import { DataService } from './dataservice';

export interface GetAlbumParameters {
	offset: number;
	size: number;
	type: string;
}

export const subSonicApi = createApi({
	reducerPath: 'subSonicApi',
	baseQuery: fetchBaseQuery({ baseUrl: `` }),
	endpoints: (builder) => ({
		getAlbums: builder.query<Album[], GetAlbumParameters>({
			query: (param) =>
				`${DataService.buildEndpointWithParameters(
					'getAlbumList',
					`&size=${param.size}&offset=${param.offset}&type=${param.type}`
				)}`,
			transformResponse: (response: any) => {
				const albumList = response['subsonic-response'] as AlbumsListResponse;
				return albumList.albumList.album;
			},
		}),
		getAlbumDetails: builder.query<AlbumDetail, string>({
			query: (param) =>
				`${DataService.buildEndpointWithParameters(
					'getAlbum',
					`&id=${param}`
				)}`,
			transformResponse: (response: any) => {
				console.log(response);
				const album = response['subsonic-response'] as AlbumDetailResponse;
				return album.album;
			},
		}),
		getCover: builder.query<string, string>({
			query: (param) =>
				`${DataService.buildEndpointWithParameters(
					'getCoverArt',
					`&id=${param}`
				)}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetAlbumsQuery,
	useGetAlbumDetailsQuery,
	useLazyGetAlbumDetailsQuery,
	useLazyGetCoverQuery,
} = subSonicApi;
