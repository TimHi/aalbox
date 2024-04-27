import { useNavigate } from 'react-router-dom';
import { NavigationController } from './NavigationControls';
export function SideBar() {
	const nav = useNavigate();

	return (
		<div style={{ width: 'fit-content' }}>
			<NavigationController nav={nav} />
		</div>
	);
}
