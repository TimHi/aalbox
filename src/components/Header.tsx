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
	const cover = dataService.buildGetCoverUrl(data.coverArt, 200);
	return (
		<div style={{ position: 'relative', paddingBottom: '40px' }}>
			<div
				style={{
					backgroundImage: `url(${cover})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
				className={style.bgImage}
			></div>
			<div
				style={{ height: '350px', position: 'absolute', top: '0', left: '0' }}
			></div>
			<div className={style.header}>
				<img className={style.cover} src={cover} />
				<div className={style.details}>
					<Typography>{typ}</Typography>
					<Typography variant='h1'>{data.name}</Typography>
					<Typography variant='h2'>{data.artist}</Typography>
					<Typography>
						{data.year} • {data.songCount} songs •{' '}
						{formattedDurationFromSeconds(data.duration)}
					</Typography>
				</div>
			</div>
		</div>
	);
}
