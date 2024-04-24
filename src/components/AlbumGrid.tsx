import { DataService } from '../data/dataservice';
import style from './AlbumGrid.module.css';
import { useGetAlbumsQuery, useLazyGetCoverQuery } from '../data/api';

export function AlbumGrid() {
	const { data, error } = useGetAlbumsQuery({
		size: 20,
		offset: 0,
		type: 'alphabeticalByName ',
	});

	const dataService = new DataService();

	function renderData() {
		if (data !== undefined) {
			return data.map((album, index) => (
				<div className={style.gridElement} key={index}>
					<img
						className={style.cover}
						src={dataService.buildGetCoverUrl(album.coverArt, 200)}
					/>
					<a href={`/a/${album.id}`}>
						<p className={style.ellipsis}>{album.album}</p>
					</a>
					<p className={style.ellipsis}>{album.artist}</p>
				</div>
			));
		} else {
			return <></>;
		}
	}

	return <div className={style.grid}>{renderData()}</div>;
}
