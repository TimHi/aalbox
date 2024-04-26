import { Typography } from '@mui/material';
import { AlbumDetail } from '../model/album';
import { DataService } from '../data/dataservice';
import style from './SongList.module.css';
import { formattedDurationFromSeconds } from '../util/time';
export interface SongListProps {
	data: AlbumDetail;
}
//TODO: Table
export function SongList({ data }: SongListProps) {
	const dataService = new DataService();
	const cover = dataService.buildGetCoverUrl(data.coverArt, 200);
	return data.song.map((song, index) => (
		<div
			key={`song-${index}`}
			style={{ display: 'flex', margin: '4px', alignItems: 'center' }}
			className={style.row}
		>
			<Typography style={{ marginRight: '4px' }} variant='h6'>
				{index}
			</Typography>
			<img className={style.cover} src={cover} />
			<div style={{ flexDirection: 'column', marginLeft: '4px' }}>
				<Typography>{song.title}</Typography>
				<Typography>{formattedDurationFromSeconds(song.duration)}</Typography>
			</div>
		</div>
	));
}
