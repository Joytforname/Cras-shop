import React from 'react';
import { observer } from 'mobx-react-lite';
import CarCard from '../../components/CarCard/CarCard';
import  savedCarsStore  from '../../stores/saved-cars-store';
import './style.css'
import classNames from 'classnames';
import SavedCarCard from '../../components/SavedCarCard/SvedCarCard';

const SavedCarsList: React.FC = observer(() => {
	const { savedCars } = savedCarsStore;

	const positionWord = (count: number) => {
		const last2Digits = Math.abs(count) % 100;
		const lastDigit = last2Digits % 10;
		if (last2Digits > 10 && last2Digits < 20) {
			return 'позиций';
		} else if (lastDigit === 1) {
			return 'позиция';
		} else if (lastDigit > 1 && lastDigit < 5) {
			return 'позиции';
		} else {
			return 'позиций';
		}
	};

	if (savedCars.length === 0) {
		return <div>У вас нет сохраненных автомобилей.</div>;
	}

	return (
		<div className='saved-cars-page'>
			<div className='saved-cars-count'>
				Избранные товары - {savedCars.length}{' '}
				<span className={classNames({ 'plural-form': savedCars.length !== 1 })}>
					{positionWord(savedCars.length)}
				</span>
			</div>
			<div className='saved-cars'>
				{savedCars.map((car) => (
					<SavedCarCard key={car.id} car={car} />
				))}
			</div>
		</div>
	);
});

export default SavedCarsList;
