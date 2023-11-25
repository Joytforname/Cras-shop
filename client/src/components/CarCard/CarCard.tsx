import './style.css';
import { Car } from '../../graphql/generated';
import BuyBtn from '../../UI/Buttons/BuyBtn/BuyBtn';
import SaveBtn from '../../UI/Buttons/SaveBtn/SaveBtn';
import savedCarsStore from '../../stores/saved-cars-store';
import formatPrice from '../../utils/formatPrice';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

interface CarProps {
	car: Car;
}

const CarCard: React.FC<CarProps> = observer(({ car }) => {
	const handleSaveCar = () => {
		const isCarSaved = savedCarsStore.savedCars.some(
			(savedCar) => savedCar.id === car.id
		);

		if (!isCarSaved) {
			savedCarsStore.setSavedCars([...savedCarsStore.savedCars, car]);
			console.log('savedCarsStore: ', JSON.stringify([...savedCarsStore.savedCars]));
			
		} else {
			savedCarsStore.setSavedCars(
				savedCarsStore.savedCars.filter((savedCar) => savedCar.id !== car.id)
			);
			console.log('removeCarsStore: ', savedCarsStore.savedCars);
		}
	};

	return (
		<div className='item-card' onClick={handleSaveCar}>
			<img
				className='item-img'
				src={`http://localhost:4000${car.img_src}`}
				alt={`${car.brand} ${car.model}`}
			/>
			<div className='item-info'>
				<div className='item-name h3-title'>
					{car.brand} {car.model}
				</div>
				<div className='item-model-year-color p1-text'>
					<div className='item-model-year'>Год: {car.model_year}</div>
					<div className='item-color'>Цвет: {car.color}</div>
				</div>
				<div className='item-price h4-title'>от ${formatPrice(car.price)}</div>
			</div>
			<div className='item-buttons'>
				<BuyBtn />
				<SaveBtn onClick={handleSaveCar} />
			</div>
		</div>
	);
});

export default CarCard;
