import { CategoryMap } from '@/services/swapi/types';

export const categories: (keyof CategoryMap)[] = [
	'planets',
	'films',
	'species',
	'vehicles',
	'starships',
	'people',
];
