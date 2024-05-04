import { useNavigate } from 'react-router-dom';
import { NavigationController } from './NavigationControls';
import { Paper, Typography } from '@mui/material';
export function SideBar() {
	const nav = useNavigate();

	return (
		<Paper
			style={{
				backgroundColor: '#191919',
				width: 'fit-content',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<a onClick={() => nav('/')}>
				<Typography variant='h6'>Aalbox</Typography>
			</a>
			<NavigationController nav={nav} />
			<a onClick={() => nav('/albums')}>
				<Typography variant='h6'>Albums</Typography>
			</a>
			<Typography variant='h6'>Playlists</Typography>
		</Paper>
	);
}
