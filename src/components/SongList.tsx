import { Typography } from '@mui/material';
import { AlbumDetail } from '../model/album';
import { DataService } from '../data/dataservice';
import style from './SongList.module.css';
import { formattedDurationFromSeconds } from '../util/time';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '../store/playerSlice';
export interface SongListProps {
	data: AlbumDetail;
}
//TODO: Table
export function SongList({ data }: SongListProps) {
	const dispatch = useDispatch();
	const dataService = new DataService();
	const cover = dataService.buildGetCoverUrl(data.coverArt, 200);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			{data.song.map((song, index) => (
				<div
					key={`song-${index}`}
					style={{
						display: 'flex',
						alignItems: 'flex-start',
					}}
					className={style.row}
					onDoubleClick={() => {
						dispatch(setCurrentSong(song.id));
					}}
				>
					{/* TODO: Handle XY/XYZ digits etc */}
					<Typography
						style={{ display: 'flex', alignSelf: 'center' }}
						variant='h6'
					>
						{index}
					</Typography>
					<img
						style={{ display: 'flex', alignSelf: 'center' }}
						className={style.cover}
						src={cover}
					/>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<Typography style={{ display: 'flex' }}>
							{song.title.trim()}
						</Typography>
						<Typography style={{ display: 'flex' }}>
							{formattedDurationFromSeconds(song.duration)}
						</Typography>
					</div>
				</div>
			))}
		</div>
	);
}
