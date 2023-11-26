import { Car } from '../graphql/generated';

const sortOptions = {
	availability: (a: Car, b: Car) => (a.availability > b.availability ? -1 : 1),
	'a-z': (a: Car, b: Car) => (a.brand > b.brand ? 1 : -1),
	'z-a': (a: Car, b: Car) => (a.brand > b.brand ? -1 : 1),
	'new-first': (a: Car, b: Car) => b.model_year - a.model_year,
	'old-first': (a: Car, b: Car) => a.model_year - b.model_year,
	lowPrice: (a: Car, b: Car) =>
		Number(a.price.replace('$', '')) - Number(b.price.replace('$', '')),
	highPrice: (a: Car, b: Car) =>
		Number(a.price.replace('$', '')) - Number(b.price.replace('$', '')),
};

export default sortOptions;
