import { ApiResponse, CategoryMap, Person } from './types.ts';

const BASE_URL = 'https://swapi.py4e.com/api/';

async function fetchCategoryResults<T extends keyof CategoryMap>(
	category: T,
	query: string,
): Promise<ApiResponse<CategoryMap[T]>> {
	const response = await fetch(`${BASE_URL}${category}/?search=${query}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${category}`);
	}
	return response.json();
}

export const fetchAllCategories = async <T extends keyof CategoryMap>(
	query: string,
	categories: T[],
): Promise<Record<T, Array<CategoryMap[T]>>> => {
	const resultsPerCategory = {} as Record<T, Array<CategoryMap[T]>>;

	const requests = categories.map(category =>
		fetchCategoryResults(category, query).then(data => {
			resultsPerCategory[category] = data.results.slice(0, 3) as Array<
				CategoryMap[T]
			>;
		}),
	);

	await Promise.all(requests);
	return resultsPerCategory;
};

export const fetchPeople = async (
	query: string,
): Promise<ApiResponse<Person>> => {
	return fetchCategoryResults('people', query);
};
