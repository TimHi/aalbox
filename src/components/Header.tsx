import { AlbumDetail } from '../model/album';
import style from './Header.module.css';
import { DataService } from '../data/dataservice';
import { Typography } from '@mui/material';
import { formattedDurationFromSeconds } from '../util/time';
export interface HeaderProps {
	data: AlbumDetail;
	typ: string;
}

export function Header({ data, typ }: HeaderProps) {
	const dataService = new DataService();
	const cover = dataService.buildGetCoverUrl(data.coverArt, 250);
	return (
		<div style={{ paddingBottom: '8px' }}>
			<div className={style.header}>
				<img className={style.cover} src={cover} />
				<div className={style.details}>
					<Typography>{typ}</Typography>
					<Typography variant='h3'>{data.name}</Typography>
					<Typography variant='h4'>{data.artist}</Typography>
					<Typography>
						{data.year} • {data.songCount} songs •{' '}
						{formattedDurationFromSeconds(data.duration)}
					</Typography>
				</div>
			</div>
		</div>
	);
}
