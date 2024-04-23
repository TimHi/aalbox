import { useEffect, useState } from 'react';
import { DataService } from '../data/dataservice';
import { Album } from '../model/album';
import style from './AlbumGrid.module.css';

export function AlbumGrid() {
	const dataService = new DataService();
	const [albums, setAlbums] = useState<Album[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const albumsData = await dataService.getAlbums(0, 50);
			setAlbums(albumsData);
		};

		fetchData();
	}, []);
	return (
		<div className={style.grid}>
			{albums.map((album, index) => (
				<div className={style.gridElement} key={index}>
					<img
						className={style.cover}
						src={dataService.buildGetCoverUrl(album.coverArt, 200)}
					/>
					<p className={style.ellipsis}>{album.album}</p>
					<p className={style.ellipsis}>{album.artist}</p>
				</div>
			))}
		</div>
	);
}
