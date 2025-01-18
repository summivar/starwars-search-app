import { PERSON_FIELDS } from '@pages/category/people/person-fields.constants.ts';

export const PersonTableSkeleton = () => (
	<div className='max-w-2xl overflow-x-auto'>
		<table className='mt-2 w-full table-auto border-collapse border border-gray-700 text-sm'>
			<thead>
				<tr>
					{PERSON_FIELDS.map((_, index) => (
						<th
							key={index}
							className='border border-gray-700 p-2 text-gray-300'
						>
							<div className='h-4 w-24 animate-pulse bg-gray-600'></div>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{Array.from({ length: 5 }).map((_, rowIndex) => (
					<tr
						key={rowIndex}
						className='text-gray-300 hover:bg-gray-800'
					>
						{PERSON_FIELDS.map((_, colIndex) => (
							<td
								key={colIndex}
								className='border border-gray-700 p-2'
							>
								<div className='h-4 w-full animate-pulse bg-gray-600'></div>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	</div>
);
