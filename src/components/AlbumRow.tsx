import Typography from '@mui/material/Typography';
import { DataService } from '../data/dataservice';
import { Album } from '../model/album';
import { Button, IconButton, Paper } from '@mui/material';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import style from './AlbumRow.module.css';
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
					<Paper style={{ backgroundColor: '#353535' }}>
						<img
							style={{ borderRadius: '4px' }}
							height={200}
							width={200}
							src={`${dataService.buildGetCoverUrl(album.coverArt, 200)}`}
							alt={album.title}
						/>
						<a
							className={style.albumLink}
							color='#c1c1c1'
							onClick={() => {
								nav(`/a/${album.id}`);
							}}
						>
							<Typography className={style.albumLink} noWrap>
								{album.title}
							</Typography>
						</a>
						<a
							className={style.artistLink}
							color='#c1c1c1'
							onClick={() => {
								nav(`/artist/${album.artistId}`);
							}}
						>
							<Typography className={style.artistLink}>
								{album.artist}
							</Typography>
						</a>
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
				{renderNavButtons()}
			</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{renderAlbums(rowIndex)}
			</div>
		</div>
	);
}
