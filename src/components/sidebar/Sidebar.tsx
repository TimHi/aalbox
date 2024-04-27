import { useNavigate } from 'react-router-dom';
import { NavigationController } from './NavigationControls';
import { Typography } from '@mui/material';
export function SideBar() {
	const nav = useNavigate();

	return (
		<div style={{ width: 'fit-content' }}>
			<Typography variant='h6'>Aalbox</Typography>
			<NavigationController nav={nav} />
		</div>
	);
}
