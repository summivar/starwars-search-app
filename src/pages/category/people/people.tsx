import { Head } from '@features/head';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPeople } from '@/services';
import { Person } from '@/services/swapi/types.ts';
import { PeopleTable, PersonTableSkeleton } from '@/pages';

export const People = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('q') || '';

	const [data, setData] = useState<Person[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			if (query) {
				setLoading(true);
				try {
					const response = await fetchPeople(query);
					setData(response.results);
				} catch (error) {
					console.error('Failed to fetch data:', error);
				} finally {
					setLoading(false);
				}
			}
		};

		fetchData();
	}, [query]);

	return (
		<div className='p-4'>
			<Head title='People' />
			{loading ? <PersonTableSkeleton /> : <PeopleTable data={data} />}
		</div>
	);
};
