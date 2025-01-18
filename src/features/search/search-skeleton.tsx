import { categories } from '@features/search/categories.constants.ts';

export const SearchSkeleton = () => {
	return (
		<div className='mt-4 space-y-3'>
			{categories.map(category => (
				<div
					key={category}
					className='rounded-lg bg-gray-700 p-4 shadow'
				>
					<h3 className='mb-2 border-b pb-2 text-lg font-semibold capitalize'>
						<div className='h-5 w-32 animate-pulse rounded bg-gray-600'></div>
					</h3>
					<ul className='space-y-1'>
						{[...Array(3)].map((_, index) => (
							<li
								key={index}
								className='h-3 w-3/4 animate-pulse rounded bg-gray-600'
							></li>
						))}
					</ul>
					<button className='mt-3 h-6 w-24 animate-pulse rounded bg-gray-600'></button>
				</div>
			))}
		</div>
	);
};
