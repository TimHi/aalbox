import style from './AlbumGrid.module.css';
import { useGetAlbumsQuery } from '../data/api';
import { AlbumRow } from './AlbumRow';
export function AlbumGrid() {
	const { data: frequentAlbums } = useGetAlbumsQuery({
		size: 10,
		offset: 0,
		type: 'frequent',
	});

	function renderFrequentAlbums() {
		if (frequentAlbums !== undefined)
			return <AlbumRow albums={frequentAlbums} title='Recently played' />;
	}

	return <div className={style.grid}>{renderFrequentAlbums()}</div>;
}
