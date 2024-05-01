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
				height: '100%', // Set height to cover 100% of the viewport height
				paddingRight: '12px',
				paddingLeft: '12px',
				marginRight: '8px',
			}}
		>
			<Typography variant='h6'>Aalbox</Typography>
			<NavigationController nav={nav} />
			<Typography variant='h6'>Home</Typography>
			<Typography variant='h6'>Search</Typography>
			<Typography variant='h6'>Playlists</Typography>
		</Paper>
	);
}
