import { Head } from '@features/head';
import { Link } from 'react-router-dom';

export const Films = () => {
	return (
		<>
			<Head title='Films' />
			<div className='text-center'>
				<Link to={`/`} className='text-gray-500 hover:text-gray-700'>
					To Back
				</Link>
			</div>
			<div className='text-center'>Films</div>
		</>
	);
};
