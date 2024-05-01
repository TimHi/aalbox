import { AlbumDetail } from '../model/album';
import style from './Header.module.css';
import { DataService } from '../data/dataservice';
import { Container, Typography } from '@mui/material';
import { formattedDurationFromSeconds } from '../util/time';
import { useNavigate } from 'react-router-dom';
export interface HeaderProps {
	data: AlbumDetail;
	typ: string;
}

export function Header({ data, typ }: HeaderProps) {
	const dataService = new DataService();
	const cover = dataService.buildGetCoverUrl(data.coverArt, 250);
	const nav = useNavigate();

	return (
		<div style={{ paddingBottom: '8px' }}>
			<div className={style.header}>
				<img className={style.cover} src={cover} />
				<div className={style.details}>
					<Container sx={{ textAlign: 'left' }}>
						<Typography sx={{ mb: 3 }}>{typ}</Typography>
						<Typography
							textAlign={'start'}
							overflow={'hidden'}
							textOverflow={'ellipsis'}
							variant='h3'
						>
							{data.name}
						</Typography>
						<a
							className={style.albumLink}
							color='#c1c1c1'
							onClick={() => {
								nav(`/artist/${data.artistId}`);
							}}
						>
							<Typography variant='h4' sx={{ mb: 3 }}>
								{data.artist}
							</Typography>
						</a>
						<Typography>
							{data.year} • {data.songCount} songs •{' '}
							{formattedDurationFromSeconds(data.duration)}
						</Typography>
					</Container>
				</div>
			</div>
		</div>
	);
}
