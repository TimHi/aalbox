// Layout.tsx
import { ReactNode } from 'react';
import { SideBar } from '../components/sidebar/Sidebar';
import { InfoBar } from '../components/sidebar/InfoBar';

interface LayoutProps {
	children: ReactNode;
}

export function BasePage({ children }: LayoutProps) {
	return (
		<>
			<SideBar />
			{children}
			<InfoBar />
		</>
	);
}
