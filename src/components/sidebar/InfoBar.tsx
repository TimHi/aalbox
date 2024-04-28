import { Paper, Typography } from '@mui/material';
export function InfoBar() {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Paper
				style={{
					backgroundColor: '#191919',
					width: '200px',
					height: '100vh', // Set height to cover 100% of the viewport height
				}}
			>
				<Typography variant='h6'>Now Playing</Typography>
			</Paper>
		</div>
	);
}
