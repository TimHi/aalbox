import { useParams } from 'react-router-dom';
import { useGetAlbumDetailsQuery } from '../data/api';
import CircularProgress from '@mui/material/CircularProgress';
import { Header } from '../components/Header';
import { SongList } from '../components/SongList';
import { SideBar } from '../components/sidebar/Sidebar';
import { InfoBar } from '../components/sidebar/InfoBar';

export function DetailAlbumView() {
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
			<div
				style={{
					display: 'flex',
					height: '100%',
					justifyContent: 'space-between',
				}}
			>
				<SideBar />
				<div style={{ flex: '1' }}>
					<div style={{ flexDirection: 'column' }}>
						<Header data={data} typ='Album' />
						<SongList data={data} />
					</div>
				</div>
				<InfoBar />
			</div>
		);
	}

	return <h1>Error loading album with ID {albumId}</h1>;
}