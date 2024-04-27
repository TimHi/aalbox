import Typography from '@mui/material/Typography';
import { DataService } from '../data/dataservice';
import { Album } from '../model/album';
import { Button, Paper } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

export interface AlbumRowProps {
	albums: Album[];
	title: string;
}

export function AlbumRow({ albums, title }: AlbumRowProps) {
	const dataService = new DataService();
	const [rowIndex, setRowIndex] = useState<number>(0);
	const albumsPerRow = 6;
	const maxIndex = Math.trunc(albums.length / albumsPerRow);
	const nav = useNavigate();

	function renderAlbums(index: number) {
		const albumElements: JSX.Element[] = [];
		let startIndex = index * albumsPerRow;
		let maxIndex = Math.min(albums.length, albumsPerRow * (index + 1));

		for (let i = startIndex; i < maxIndex; i++) {
			const album = albums[i];
			albumElements.push(
				<div
					key={i}
					style={{
						flex: '1 1 auto',
						maxWidth: '200px',
						padding: '4px',
					}}
				>
					<Paper style={{ backgroundColor: '#353535' }}>
						<img
							style={{ borderRadius: '4px' }}
							height={200}
							width={200}
							src={`${dataService.buildGetCoverUrl(album.coverArt, 200)}`}
							alt={album.title}
						/>
						<a
							style={{ cursor: 'pointer' }}
							color='#c1c1c1'
							onClick={() => {
								nav(`/a/${album.id}`);
							}}
						>
							<Typography color={'white'} noWrap>
								{album.title}
							</Typography>
						</a>
						<Typography color={'#828282'}>{album.artist}</Typography>
					</Paper>
				</div>
			);
		}
		return albumElements;
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'flex-start',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'flex-start',
					flexDirection: 'row',
				}}
			>
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
					disabled={rowIndex === maxIndex - 1}
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
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{renderAlbums(rowIndex)}
			</div>
		</div>
	);
}
