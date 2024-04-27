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
			style={{
				display: 'flex',
				width: 'fit-content',
			}}
		>
			<Button
				onClick={() => {
					nav(-1);
				}}
			>
				<ArrowBackIosIcon />
			</Button>
			<Button
				onClick={() => {
					nav(1);
				}}
			>
				<ArrowForwardIosIcon />
			</Button>
		</div>
	);
}
