import { Button } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface NavProps {
	nav: NavigateFunction;
}

export function NavigationController({ nav }: NavProps) {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
		>
			<Button
				onClick={() => {
					nav(-1);
				}}
			>
				<ArrowBackIosIcon color='secondary' />
			</Button>
			<Button
				onClick={() => {
					nav(1);
				}}
			>
				<ArrowForwardIosIcon color='secondary' />
			</Button>
		</div>
	);
}
