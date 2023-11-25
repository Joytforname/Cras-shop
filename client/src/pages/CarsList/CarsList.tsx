import './style.css';
import { Car } from '../../graphql/generated';
import { ReactElement, useEffect, useState } from 'react';
import CarCard from '../../components/CarCard/CarCard';
import SearchControls from '../../components/SearchControls/SearchControls';
import searchStore from '../../stores/search-store';
import { observer } from 'mobx-react-lite';
import filteredCarsStore from '../../stores/filtered-cars-store';

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
	return (
		<>
			<SearchControls
				valueSearch={searchValue}
				onChangeSearchValue={onChangeSearchValue}
			/>
			<div className='cars-list'>
				{filteredCars.map((car: Car) => (
					<CarCard key={car.id} car={car} />
				))}
			</div>
		</>
	);
});

export default CarsList;
