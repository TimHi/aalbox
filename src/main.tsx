import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AlbumView } from './pages/AlbumView';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { PlayerControls } from './components/PlayerControls';
import { SideBar } from './components/sidebar/Sidebar';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/a/:albumId',
		element: <AlbumView />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
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
	</React.StrictMode>
);
