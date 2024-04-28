import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AlbumView } from './pages/AlbumView';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PlayerControls } from './components/PlayerControls';
import { ArtistView } from './pages/ArtistView';
import {
	experimental_extendTheme as extendTheme,
	Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import { pink } from '@mui/material/colors';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/a/:albumId',
		element: <AlbumView />,
	},
	{
		path: '/artist/:artistId',
		element: <ArtistView />,
	},
]);

const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: '#bababa',
				},
			},
		},
		dark: {
			palette: {
				primary: {
					main: '#bababa',
				},
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CssVarsProvider theme={theme}>
			<div style={{ display: 'flex' }}>
				<Provider store={store}>
					<div className='container'>
						<RouterProvider router={router} />
					</div>
					<div className='player'>
						<PlayerControls />
					</div>
				</Provider>
			</div>
		</CssVarsProvider>
	</React.StrictMode>
);
