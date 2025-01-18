import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export type HeadProps = { title: string };

export const Head = ({ title }: HeadProps) => {
	const location = useLocation();

	useEffect(() => {
		let newTitle = title.trim();
		if (!title.includes('VAT')) {
			newTitle = `VAT | ${title.trim()}`;
		}
		document.title = newTitle;
	}, [location, title]);

	return null;
};
