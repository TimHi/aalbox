import style from './AlbumGrid.module.css';
import { useGetAlbumsQuery } from '../data/api';
import { AlbumRow } from './AlbumRow';
export function AlbumGrid() {
	const { data: frequentAlbums } = useGetAlbumsQuery({
		size: 12,
		offset: 0,
		type: 'frequent',
	});

	const { data: recentlyAdded } = useGetAlbumsQuery({
		size: 12,
		offset: 0,
		type: 'recent',
	});

	const { data: newestAdded } = useGetAlbumsQuery({
		size: 12,
		offset: 0,
		type: 'newest',
	});

	function renderFrequentAlbums() {
		if (frequentAlbums !== undefined)
			return <AlbumRow albums={frequentAlbums} title='Frequently played' />;
		else return <h1>Error fetching frequent played albums</h1>;
	}
	function renderRecentlyAddedAlbums() {
		if (recentlyAdded !== undefined)
			return <AlbumRow albums={recentlyAdded} title='Recently added' />;
		else return <h1>Error fetching recently added albums</h1>;
	}
	function renderNewestAlbums() {
		if (newestAdded !== undefined)
			return <AlbumRow albums={newestAdded} title='Newly added' />;
		else return <h1>Error fetching newest added albums</h1>;
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div className={style.grid}>{renderFrequentAlbums()}</div>
			<div className={style.grid}>{renderRecentlyAddedAlbums()}</div>
			<div className={style.grid}>{renderNewestAlbums()}</div>
		</div>
	);
}
