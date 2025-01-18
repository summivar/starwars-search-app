import { Head } from '@features/head';
import { Link } from 'react-router-dom';

export const Species = () => {
	return (
		<>
			<Head title='Species' />
			<div className='text-center'>
				<Link to={`/`} className='text-gray-500 hover:text-gray-700'>
					To Back
				</Link>
			</div>
			<div className='text-center'>Species</div>
		</>
	);
};
