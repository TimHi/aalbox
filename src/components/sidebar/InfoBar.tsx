import { Chip, Paper, Typography } from '@mui/material';
import { selectCurrentSong } from '../../store/playerSlice';
import { useAppSelector } from '../../store/hooks';
import { DataService } from '../../data/dataservice';
export function InfoBar() {
	const currentSong = useAppSelector(selectCurrentSong);
	const dataService = new DataService();

	function renderSongPlaying() {
		console.log(currentSong);
		if (currentSong === undefined) {
			return <></>;
		} else {
			return (
				<Paper
					style={{
						display: 'flex',
						flexDirection: 'column',
						backgroundColor: '#191919',
						width: '200px',
						height: '100%',
					}}
				>
					<Typography variant='h6'>Now Playing</Typography>
					<img
						style={{ borderRadius: '4px' }}
						height={200}
						width={200}
						src={`${dataService.buildGetCoverUrl(currentSong.coverArt, 200)}`}
						alt={currentSong.title}
					/>
					<Typography>{currentSong.title}</Typography>
					<Typography>{currentSong.artist}</Typography>
					{currentSong.genres.map((genre) => {
						return (
							<Chip label={genre.name} color='primary' variant='outlined' />
						);
					})}
				</Paper>
			);
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'end',
			}}
		>
			{renderSongPlaying()}
		</div>
	);
}
