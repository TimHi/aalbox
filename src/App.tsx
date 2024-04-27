import './App.css';
import 'react-h5-audio-player/lib/styles.css';
import { AlbumGrid } from './components/AlbumGrid';
import { SideBar } from './components/sidebar/Sidebar';

function App() {
	return (
		<div style={{ display: 'flex' }}>
			<SideBar />
			<AlbumGrid />
		</div>
	);
}

export default App;
