import './style.css';
import { Car } from '../../graphql/generated';
import BuyBtn from '../../UI/Buttons/BuyBtn/BuyBtn';
import SaveBtn from '../../UI/Buttons/SaveBtn/SaveBtn';
import savedCarsStore from '../../stores/saved-cars-store';
import formatPrice from '../../utils/formatPrice';
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
			console.log('savedCarsStore: ', savedCarsStore.savedCars.length);
			
		} else {
			savedCarsStore.setSavedCars(
				savedCarsStore.savedCars.filter((savedCar) => savedCar.id !== car.id)
			);
			console.log('removeCarsStore: ', savedCarsStore.savedCars.length);
		}
	};

	return (
		<div className='item-card'>
			{car.availability ? (
				<img
					className='item-img'
					src={`http://localhost:4000${car.img_src}`}
					alt={`${car.brand} ${car.model}`}
				/>
			) : (
				<div className='item-not-available'>
					<img
						className='item-not-available-img'
						src={`http://localhost:4000${car.img_src}`}
						alt={`${car.brand} ${car.model}`}
					/>
					<div className='item-not-available-back'>
						<div className='item-not-available-text h3-title'>Нет в наличии</div>
					</div>
				</div>
			)}

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
				<BuyBtn status={car.availability}/>
				<SaveBtn status={car.availability} carSaver={handleSaveCar} />
			</div>
		</div>
	);
});

export default CarCard;
