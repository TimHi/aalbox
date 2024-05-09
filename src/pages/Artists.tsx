import { useGetAlbumsQuery } from '../data/api';
import { useState } from 'react';

export function AlbumsView() {
	const [offset, setOffset] = useState<number>(0);
	const { data } = useGetAlbumsQuery({
		offset: offset,
		size: 50,
		type: 'alphabeticalByName',
	});
	return (
		<div
			style={{
				display: 'flex',
				height: '100%',
			}}
		></div>
	);
}
