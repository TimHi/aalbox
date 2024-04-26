import { useParams } from 'react-router-dom';
import { useGetAlbumDetailsQuery } from '../data/api';
import CircularProgress from '@mui/material/CircularProgress';
import { Header } from '../components/Header';
import { SongList } from '../components/SongList';

export function AlbumView() {
	const { albumId } = useParams();
	const { data, isLoading, isError } = useGetAlbumDetailsQuery(albumId ?? '');

	if (isLoading) {
		return <CircularProgress />;
	}

	if (data !== undefined) {
		return (
			<>
				<Header data={data} typ='Album' />
				<SongList data={data} />
			</>
		);
	}

	return <h1>Error loading album with ID {albumId}</h1>;
}