import { Person } from '@/services/swapi/types.ts';
import { ChangeEvent, useState } from 'react';
import { PERSON_FIELDS } from '@pages/category/people/person-fields.constants.ts';

type PeopleTableProps = {
	data: Person[];
};

export const PeopleTable = ({ data }: PeopleTableProps) => {
	const [people, setPeople] = useState<Person[]>(data);
	const [newPerson, setNewPerson] = useState<Partial<Person>>({});
	const [editPersonIndex, setEditPersonIndex] = useState<number | null>(null);
	const [editFields, setEditFields] = useState<Partial<Person>>({});

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setNewPerson(prev => ({ ...prev, [name]: value }));
	};

	const handleEditChange = (
		e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		const { name, value } = e.target;
		setEditFields(prev => ({ ...prev, [name]: value }));
	};

	const handleAddPerson = () => {
		if (newPerson.name) {
			setPeople(prev => [
				...prev,
				{ ...newPerson, name: newPerson.name } as Person,
			]);
			setNewPerson({});
		}
	};

	const handleEditPerson = (index: number) => {
		setEditPersonIndex(index);
		setEditFields(people[index]);
	};

	const handleSavePerson = (index: number) => {
		const updatedPeople = [...people];
		updatedPeople[index] = { ...updatedPeople[index], ...editFields };
		setPeople(updatedPeople);
		setEditPersonIndex(null);
		setEditFields({});
	};

	const handleDeletePerson = (index: number) => {
		const updatedPeople = people.filter((_, i) => i !== index);
		setPeople(updatedPeople);
		if (editPersonIndex === index) {
			setEditPersonIndex(null);
			setEditFields({});
		}
	};

	return (
		<div className='max-w-2xl'>
			<div className='text-center'>People</div>
			<div className='overflow-x-auto border border-gray-500'>
				<table className='w-full table-auto border-collapse border border-gray-700 text-sm'>
					<thead>
						<tr>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Name
							</th>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Height
							</th>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Mass
							</th>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Hair Color
							</th>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Skin Color
							</th>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Eye Color
							</th>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Birth Year
							</th>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Gender
							</th>
							<th className='border border-gray-700 p-2 text-gray-300'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{people.map((person, index) => (
							<tr
								key={index}
								className='text-gray-300 hover:bg-gray-800'
							>
								{[
									'name',
									'height',
									'mass',
									'hair_color',
									'skin_color',
									'eye_color',
									'birth_year',
									'gender',
								].map(field => (
									<td
										key={field}
										className='max-w-xs overflow-hidden text-ellipsis border border-gray-700 p-2'
									>
										{editPersonIndex === index ? (
											<input
												type='text'
												name={field}
												value={
													editFields[
														field as keyof Person
													] || ''
												}
												onChange={handleEditChange}
												className='w-full rounded border border-gray-700 bg-gray-800 p-2 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
											/>
										) : (
											<span className='truncate'>
												{person[field as keyof Person]}
											</span>
										)}
									</td>
								))}
								<td className='flex flex-row border border-gray-700 p-2'>
									{editPersonIndex === index ? (
										<button
											onClick={() =>
												handleSavePerson(index)
											}
											className='rounded bg-green-500 px-4 py-1 text-white'
										>
											Save
										</button>
									) : (
										<button
											onClick={() =>
												handleEditPerson(index)
											}
											className='rounded bg-yellow-500 px-4 py-1 text-white'
										>
											Edit
										</button>
									)}

									<button
										onClick={() =>
											handleDeletePerson(index)
										}
										className='ml-2 rounded bg-red-500 px-4 py-1 text-white'
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className='mt-4'>
				<h3 className='text-lg font-semibold text-gray-300'>
					Add New Person
				</h3>
				<div className='grid grid-cols-2 gap-4'>
					{PERSON_FIELDS.map(field => (
						<div key={field}>
							<label className='mb-1 block text-sm font-medium capitalize text-gray-300'>
								{field.replace('_', ' ')}
							</label>
							<input
								type='text'
								name={field}
								value={newPerson[field as keyof Person] || ''}
								onChange={handleInputChange}
								className='w-full rounded border border-gray-700 bg-gray-800 p-2 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
					))}
				</div>
				<button
					onClick={handleAddPerson}
					className='mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
				>
					Add Person
				</button>
			</div>
		</div>
	);
};
