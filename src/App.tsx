import 'react-h5-audio-player/lib/styles.css';
import { AlbumGrid } from './components/AlbumGrid';
import { SideBar } from './components/sidebar/Sidebar';
import { InfoBar } from './components/sidebar/InfoBar';

function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<SideBar />
			<AlbumGrid />
			<InfoBar />
		</div>
	);
}

export default App;
