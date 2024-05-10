import { useParams } from 'react-router-dom';
import { useGetAlbumDetailsQuery } from '../data/api';
import CircularProgress from '@mui/material/CircularProgress';
import { Header } from '../components/Header';
import { SongList } from '../components/SongList';
import { BasePage } from './BasePage';

export function DetailAlbumView() {
	const { albumId } = useParams();
	const { data, isLoading } = useGetAlbumDetailsQuery(albumId ?? '');

	if (isLoading) {
		return (
			<>
				<CircularProgress />
			</>
		);
	}

	if (data !== undefined) {
		return (
			<BasePage>
				<Header data={data} typ='Album' />
				<SongList data={data} />
			</BasePage>
		);
	}

	return <h1>Error loading album with ID {albumId}</h1>;
}
