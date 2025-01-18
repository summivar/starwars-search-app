import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { SearchSkeleton } from './search-skeleton.tsx';
import { categories } from './categories.constants.ts';
import { CategoryMap } from '@/services/swapi/types.ts';
import { fetchAllCategories } from '@/services';
import { SearchItem } from '@features/search/search-item.tsx';

export const Search = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<
		Partial<Record<keyof CategoryMap, CategoryMap[keyof CategoryMap][]>>
	>({});
	const [loading, setLoading] = useState(false);
	const [visibleItems, setVisibleItems] = useState<(keyof CategoryMap)[]>([]);

	const fetchResults = useCallback(async (searchTerm: string) => {
		setVisibleItems([]);
		setLoading(true);
		try {
			const resultsPerCategory = await fetchAllCategories(
				searchTerm,
				categories,
			);
			setResults(resultsPerCategory);
		} catch (error) {
			console.error('Error fetching search results:', error);
		} finally {
			setLoading(false);
		}
	}, []);

	const debouncedSearch = useCallback(
		debounce((searchTerm: string) => {
			if (searchTerm) {
				fetchResults(searchTerm);
			} else {
				setResults({});
			}
		}, 300),
		[fetchResults],
	);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		debouncedSearch(value);
	};

	useEffect(() => {
		return () => {
			debouncedSearch.cancel();
		};
	}, [debouncedSearch]);

	useEffect(() => {
		if (Object.keys(results).length > 0) {
			const categories = Object.keys(results) as (keyof CategoryMap)[];
			categories.forEach((category, index) => {
				setTimeout(() => {
					setVisibleItems(prev => [...prev, category]);
				}, 100 * index);
			});
		}
	}, [results]);

	return (
		<div className='max-w-2xl p-4'>
			<input
				type='text'
				value={query}
				onChange={handleInputChange}
				placeholder='Search Star Wars...'
				className='w-full rounded-lg border border-gray-600 bg-gray-800 p-3 text-gray-300 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500'
			/>

			{loading ? (
				<SearchSkeleton />
			) : (
				<div className='mt-4 space-y-4'>
					{Object.entries(results)
						.sort(
							([, itemsA], [, itemsB]) =>
								(itemsB?.length || 0) - (itemsA?.length || 0),
						)
						.map(
							([category, items]) =>
								visibleItems.includes(
									category as keyof CategoryMap,
								) && (
									<SearchItem
										key={category}
										category={category}
										items={items}
										query={query}
									/>
								),
						)}
				</div>
			)}
		</div>
	);
};
