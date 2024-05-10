import { useParams } from 'react-router-dom';
import { useGetArtistQuery } from '../data/api';
import { SideBar } from '../components/sidebar/Sidebar';
import { CircularProgress, Container, Typography } from '@mui/material';
import { AlbumRow } from '../components/AlbumRow';
import { BasePage } from './BasePage';

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
			<BasePage>
				<Container sx={{ textAlign: 'left' }}>
					<Typography variant='h2'>{data.name}</Typography>
					<AlbumRow title='Albums' albums={data.album} />
				</Container>
			</BasePage>
		);
	}

	return <h1>Error loading artist with ID {artistId}</h1>;
}
