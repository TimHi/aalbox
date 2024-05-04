import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DetailAlbumView } from './pages/DetailAlbumView';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PlayerControls } from './components/PlayerControls';
import { ArtistView } from './pages/ArtistView';
import {
	experimental_extendTheme as extendTheme,
	Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';
import Spectral from './assets/fonts/Spectral/Spectral-Regular.ttf';
import Montserrat from './assets/fonts/Montserrat/static/Montserrat-Regular.ttf';
import { AlbumsView } from './pages/Albums';
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/a/:albumId',
		element: <DetailAlbumView />,
	},
	{
		path: '/artist/:artistId',
		element: <ArtistView />,
	},
	{
		path: '/albums',
		element: <AlbumsView />,
	},
]);

const theme = extendTheme({
	// typography: {
	// 	fontFamily: 'Spectral, sans-serif',
	// },
	// components: {
	// 	MuiCssBaseline: {
	// 		styleOverrides: `
	//     @font-face {
	//       font-family: 'Spectral';
	//       font-style: normal;
	//       font-display: swap;
	//       font-weight: 400;
	//       src: local('Spectral'), local('Spectral'), url(${Spectral}) format('ttf');
	//       }
	//   `,
	// 	},
	// },
	typography: {
		fontFamily: 'Montserrat, sans-serif',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
	    @font-face {
	      font-family: 'Montserrat-Regular';
	      font-style: normal;
	      font-display: swap;
	      font-weight: 400;
	      src: local('Montserrat-Regular'), local('Montserrat-Regular'), url(${Montserrat}) format('ttf');
	      }
	  `,
		},
	},
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
