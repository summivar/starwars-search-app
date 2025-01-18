import { Search } from '@features/search';
import { Head } from '@features/head';

export const Home = () => {
	return (
		<>
			<Head title='Home' />
			<Search />
		</>
	);
};
