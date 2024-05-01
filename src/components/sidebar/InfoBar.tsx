import { Paper, Typography } from '@mui/material';
export function InfoBar() {
	return (
		<div>
			<Paper
				style={{
					backgroundColor: '#191919',
					width: '200px',
					height: '100%',
				}}
			>
				<Typography variant='h6'>Now Playing</Typography>
			</Paper>
		</div>
	);
}
