import { useParams } from 'react-router-dom';
import { useGetAlbumDetailsQuery } from '../data/api';
import CircularProgress from '@mui/material/CircularProgress';
import { Header } from '../components/Header';
import { SongList } from '../components/SongList';
import { SideBar } from '../components/sidebar/Sidebar';

export function AlbumView() {
	const { albumId } = useParams();
	const { data, isLoading } = useGetAlbumDetailsQuery(albumId ?? '');

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
			<div>
				<SideBar />
				<Header data={data} typ='Album' />
				<SongList data={data} />
			</div>
		);
	}

	return <h1>Error loading album with ID {albumId}</h1>;
}
