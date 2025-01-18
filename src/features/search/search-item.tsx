import {
	Film,
	Person,
	Planet,
	Species,
	Starship,
	Vehicle,
} from '@/services/swapi/types.ts';
import { Link } from 'react-router-dom';

type SearchItemProps = {
	category: string;
	query: string;
	items: (Film | Person | Vehicle | Species | Starship | Planet)[];
};

export const SearchItem = ({ category, items, query }: SearchItemProps) => {
	const renderItemName = (
		item: Film | Person | Vehicle | Species | Starship | Planet,
	) => {
		if (category === 'films' && 'title' in item) {
			return item.title;
		}
		if (
			['people', 'vehicles', 'species', 'starships', 'planets'].includes(
				category,
			) &&
			'name' in item
		) {
			return item.name;
		}
		return 'Unknown';
	};

	return (
		<div className='rounded-lg border-gray-600 bg-gray-800 p-4 text-gray-300 shadow focus:border-gray-400 focus:outline-none'>
			<h3 className='mb-2 border-b pb-2 text-lg font-semibold capitalize'>
				{category}
			</h3>
			<ul className='space-y-1'>
				{items?.map((item, index) => (
					<li key={index} className='text-white-700 text-sm'>
						{renderItemName(item)}
					</li>
				))}
			</ul>
			<Link
				to={`/category/${category}?q=${encodeURIComponent(query)}`}
				className='mt-3 text-sm text-blue-400 hover:text-blue-800'
			>
				View All
			</Link>
		</div>
	);
};
