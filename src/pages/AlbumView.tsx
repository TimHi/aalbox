import { useParams } from 'react-router-dom';

export function AlbumView() {
	const { albumId } = useParams();
	return <h1>{albumId}</h1>;
}
