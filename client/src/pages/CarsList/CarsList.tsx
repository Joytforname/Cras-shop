import './style.css';
import { Car } from '../../graphql/generated';
import { useEffect } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import SearchControls from '../../components/SearchControls/SearchControls';
import searchStore from '../../stores/search-store';
import { observer } from 'mobx-react-lite';
import filteredCarsStore from '../../stores/filtered-cars-store';

type SortOption =
	| 'availability'
	| 'a-z'
	| 'z-a'
	| 'new-first'
	| 'old-first'
	| 'lowPrice'
	| 'highPrice';

interface CarsListProps {
	cars: Car[];
}

const CarsList: React.FC<CarsListProps> = observer(({ cars }) => {
	const { searchValue, setValue } = searchStore;
	const { filteredCars, setFilteredCars } = filteredCarsStore;
	useEffect(() => {
		const filterCars = () => {
			if (searchValue) {
				const lowercasedSearchValue = searchValue
					.replaceAll(' ', '')
					.toLowerCase();
				return cars.filter((car) =>
					(car.brand + car.model).toLowerCase().includes(lowercasedSearchValue)
				);
			}
			return cars;
		};
		setFilteredCars(filterCars());
	}, [cars, searchValue, setFilteredCars]);

	const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value: SortOption = e.target.value as SortOption;
		switch (value) {
			case 'availability':
				return setFilteredCars(
					filteredCars.sort((a, b) =>
						a.availability > b.availability ? -1 : 1
					)
				);
			case 'a-z':
				return setFilteredCars(
					filteredCars.sort((a, b) => (a.brand > b.brand ? 1 : -1))
				);
			case 'z-a':
				return setFilteredCars(
					filteredCars.sort((a, b) => (a.brand > b.brand ? -1 : 1))
				);
			case 'new-first':
				return setFilteredCars(
					filteredCars.sort((a, b) => b.model_year - a.model_year)
				);
			case 'old-first':
				return setFilteredCars(
					filteredCars.sort((a, b) => a.model_year - b.model_year)
				);
			case 'lowPrice': {
				setFilteredCars(
					filteredCars.sort(
						(a, b) =>
							Number(a.price.replace('$', '')) -
							Number(b.price.replace('$', ''))
					)
				);
				return setFilteredCars(
					filteredCars.sort(
						(a, b) =>
							Number(a.price.replace('$', '')) -
							Number(b.price.replace('$', ''))
					)
				);
			}
			case 'highPrice':
				return setFilteredCars(
					filteredCars.sort(
						(a, b) =>
							Number(b.price.replace('$', '')) -
							Number(a.price.replace('$', ''))
					)
				);
			default:
				return filteredCars;
		}
	};
	return (
		<>
			<SearchControls
				sortFunc={handleSort}
				valueSearch={searchValue}
				onChangeSearchValue={onChangeSearchValue}
			/>
			<div className='cars-list' onChange={() => cars}>
				{filteredCars.map((car: Car) => (
					<CarCard key={car.id} car={car} />
				))}
			</div>
		</>
	);
});

export default CarsList;
