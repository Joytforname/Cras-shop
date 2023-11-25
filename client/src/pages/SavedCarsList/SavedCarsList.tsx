import React from 'react';
import { observer } from 'mobx-react-lite';
import CarCard from '../../components/CarCard/CarCard';
import  savedCarsStore  from '../../stores/saved-cars-store';

const SavedCarsList: React.FC = observer(() => {

	const { savedCars } = savedCarsStore;


	if (savedCars.length === 0) {
		return <div>У вас нет сохраненных автомобилей.</div>;
	}

	return (
		<div>
			<h1>Сохраненные Автомобили</h1>
			<div>
				{savedCars.map((car) => (
					<CarCard key={car.id} car={car} />
				))}
			</div>
		</div>
	);
});

export default SavedCarsList;
