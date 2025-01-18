import { Link } from 'react-router-dom';
import { getRandomNotFoundQuote } from '@/pages';
import { Head } from '@features/head';

export const NotFoundPage = () => {
	return (
		<>
			<Head title='Not Found' />
			<div className='text-center'>
				<p> {getRandomNotFoundQuote()}</p>
				<br />
				<p>
					Go to{' '}
					<Link
						className='hover:text-green-400 active:text-green-600'
						to='/'
					>
						Home
					</Link>
				</p>
			</div>
		</>
	);
};
