import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useAppSelector } from '../store/hooks';
import { selectCurrentSong } from '../store/playerSlice';
import { DataService } from '../data/dataservice';
export function PlayerControls() {
	const currentSong = useAppSelector(selectCurrentSong);
	return (
		<AudioPlayer
			src={`${DataService.buildEndpointWithParameters(
				'stream',
				`&id=${currentSong?.id}`
			)}`}
			showSkipControls={true}
			onPlay={(e) => console.log('onPlay')}
			onEnded={(e) => console.log('onEnd')}
			onClickNext={(e) => console.log('skip')}
		/>
	);
}
