import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
export function PlayerControls() {
	return (
		<AudioPlayer
			src="http://192.168.178.25:4533/rest/stream.view?u=timhi&p=A%24-_%3Am32'%5E%26%29%25D%22&v=1.16.1&c=app&f=json&id=c478b22782dad27af10a55ed1135b0ba"
			onPlay={(e) => console.log('onPlay')}
			// other props here
		/>
	);
}
