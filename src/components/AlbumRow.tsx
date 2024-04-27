import Typography from '@mui/material/Typography';
import { DataService } from '../data/dataservice';
import { Album } from '../model/album';
import Carousel from 'react-material-ui-carousel';
import { Button, Card, CardContent } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface AlbumRowProps {
	albums: Album[];
	title: string;
}

export function AlbumRow({ albums, title }: AlbumRowProps) {
	const dataService = new DataService();
	const [rowIndex, setRowIndex] = useState<number>(0);
	const maxIndex = Math.trunc(albums.length / 6);
	console.log(rowIndex);
	console.log(maxIndex);
	function renderAlbums(index: number) {
		return <></>;
	}

	return (
		<div>
			<Typography variant='h6'>{title}</Typography>
			<Button
				disabled={rowIndex === 0}
				onClick={() => {
					let tRow = rowIndex;
					setRowIndex(tRow - 1);
				}}
			>
				<ArrowBackIosIcon
					style={{ height: '16px', width: '16px' }}
					color='primary'
				/>
			</Button>
			<Button
				disabled={rowIndex === maxIndex}
				onClick={() => {
					let tRow = rowIndex;
					setRowIndex(tRow + 1);
				}}
			>
				<ArrowForwardIosIcon
					style={{ height: '16px', width: '16px' }}
					color='primary'
				/>
			</Button>
			{renderAlbums(rowIndex)}
		</div>
	);
}
