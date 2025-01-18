import { Outlet } from 'react-router-dom';
import { Footer } from '@features/ui/footer';
import './layout.css';

export const Layout = () => {
	return (
		<>
			<div className='sky-background'></div>
			<div className='glowing-stars'></div>
			<div className='floating-clouds'></div>
			<div className='flex min-h-screen flex-col'>
				<div className='h-container relative z-10 box-border flex-1'>
					<Outlet />
				</div>
				<Footer />
			</div>
		</>
	);
};
