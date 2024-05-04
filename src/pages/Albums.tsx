import { useParams } from 'react-router-dom';
import {
	GetAlbumParameters,
	useGetAlbumDetailsQuery,
	useGetAlbumsQuery,
	useLazyGetAlbumsQuery,
} from '../data/api';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import { AlbumCard } from '../components/AlbumCard';

export function AlbumsView() {
	const [offset, setOffset] = useState<number>(0);
	const { data } = useGetAlbumsQuery({
		offset: offset,
		size: 50,
		type: 'alphabeticalByName',
	});

	return (
		<div>
			<div
				style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
			>
				<Typography variant='h4'>Browse through Albums</Typography>
				<Button
					onClick={() => {
						const tOffset = offset;
						if (tOffset > 0) setOffset(tOffset - 50);
					}}
				>
					<ArrowBackIosIcon color='secondary' />
				</Button>
				<Button
					onClick={() => {
						const tOffset = offset;
						if (data !== undefined) setOffset(tOffset + 50);
					}}
				>
					<ArrowForwardIosIcon color='secondary' />
				</Button>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{data?.map((album) => {
					return (
						<div
							key={album.id}
							style={{ flex: '1 1 auto', maxWidth: '200px', padding: '4px' }}
						>
							<AlbumCard album={album} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
