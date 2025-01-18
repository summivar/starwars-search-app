const quotes = [
	'Oops! This page took a wrong turn.',
	'Page not found, but we found you! 😜',
	'Lost in space? This page is too!',
	"404: It's like this page is on vacation.",
	'Uh-oh! This page has vanished into thin air.',
	'This page? Never heard of it. Maybe try a map?',
	'Oops! You broke the internet (just kidding).',
	'You found a black hole... but no page!',
	'404! Even our server’s scratching its head.',
];

export const getRandomNotFoundQuote = (): string => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
};
