import { Person } from '@/services/swapi/types.ts';

export const PERSON_FIELDS: (keyof Person)[] = [
	'name',
	'height',
	'mass',
	'hair_color',
	'skin_color',
	'eye_color',
	'birth_year',
	'gender',
];
