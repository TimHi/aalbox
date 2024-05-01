import { useParams } from 'react-router-dom';
import { useGetArtistQuery } from '../data/api';
import { SideBar } from '../components/sidebar/Sidebar';
import { CircularProgress, Container, Typography } from '@mui/material';
import { AlbumRow } from '../components/AlbumRow';
import { InfoBar } from '../components/sidebar/InfoBar';

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
			<div
				style={{
					display: 'flex',
					height: '100%',
					justifyContent: 'space-between',
				}}
			>
				<SideBar />
				<div style={{ flex: '1' }}>
					<div
						style={{
							flex: '1',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start',
						}}
					>
						<Container sx={{ textAlign: 'left' }}>
							<Typography variant='h2'>{data.name}</Typography>
							<AlbumRow title='Albums' albums={data.album} />
						</Container>
					</div>
				</div>
				<InfoBar />
			</div>
		);
	}

	return <h1>Error loading artist with ID {artistId}</h1>;
}
