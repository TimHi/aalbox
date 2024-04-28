import { useParams } from 'react-router-dom';
import { useGetArtistQuery } from '../data/api';
import { SideBar } from '../components/sidebar/Sidebar';
import { CircularProgress, Typography } from '@mui/material';
import { AlbumRow } from '../components/AlbumRow';

export function ArtistView() {
	const { artistId } = useParams();
	const { data, isLoading } = useGetArtistQuery(artistId ?? '');

	if (isLoading) {
		return (
			<>
				<SideBar />
				<CircularProgress />
			</>
		);
	}

	if (data !== undefined) {
		return (
			<div style={{ display: 'flex' }}>
				<SideBar />
				<div style={{ flexDirection: 'column' }}>
					<Typography variant='h2'>{data.name}</Typography>
					<AlbumRow title='Albums' albums={data.album} />
				</div>
			</div>
		);
	}

	return <h1>Error loading artist with ID {artistId}</h1>;
}
