import Typography from '@mui/material/Typography';
import { Album } from '../model/album';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AlbumCard } from './AlbumCard';
export interface AlbumRowProps {
	albums: Album[];
	title: string;
}

export function AlbumRow({ albums, title }: AlbumRowProps) {
	const [rowIndex, setRowIndex] = useState<number>(0);
	const albumsPerRow = 6;
	const maxIndex = Math.trunc(albums.length / albumsPerRow);
	const shouldRenderNavButtons = albums.length > albumsPerRow;

	function renderNavButtons() {
		if (shouldRenderNavButtons) {
			return (
				<>
					<IconButton
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
					</IconButton>
					<IconButton
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
					</IconButton>
				</>
			);
		}
	}

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
					<AlbumCard album={album} />
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
				{renderNavButtons()}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{renderAlbums(rowIndex)}
			</div>
		</div>
	);
}
