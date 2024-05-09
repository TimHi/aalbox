import { Paper, Typography } from '@mui/material';
import { Album } from '../model/album';
import { DataService } from '../data/dataservice';
import style from './AlbumRow.module.css';
import { useNavigate } from 'react-router-dom';
export interface AlbumCardProps {
	album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
	const dataService = new DataService();
	const nav = useNavigate();
	return (
		<Paper style={{ backgroundColor: '#353535' }}>
			<img
				style={{ borderRadius: '4px' }}
				height={200}
				width={200}
				src={`${dataService.buildGetCoverUrl(album.coverArt, 200)}`}
				alt={album.title}
			/>
			<a
				className={style.albumLink}
				color='#c1c1c1'
				onClick={() => {
					nav(`/a/${album.id}`);
				}}
			>
				<Typography className={style.albumLink} noWrap>
					{album.title}
				</Typography>
			</a>
			<a
				className={style.artistLink}
				color='#c1c1c1'
				onClick={() => {
					nav(`/artist/${album.artistId}`);
				}}
			>
				<Typography
					style={{
						overflow: 'hidden',
						textOverflow: 'ellipsis',
						whiteSpace: 'nowrap',
					}}
					className={style.artistLink}
				>
					{album.artist}
				</Typography>
			</a>
		</Paper>
	);
}
