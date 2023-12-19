import './style.css';
import { Car } from '../../graphql/generated';
import SelectComplBtn from '../../UI/Buttons/SelectCoplBtn/SelectComplBtn';
import TrashBtn from '../../UI/Buttons/TrashBtn/TrashBtn';
import formatPrice from '../../utils/formatPrice';
import savedCarsStore from '../../stores/saved-cars-store';

interface CarProps {
	car: Car;
}

const SavedCarCard = ({ car }: CarProps) => {
	const removeCar = () => {
		savedCarsStore.setSavedCars(
			savedCarsStore.savedCars.filter((savedCar) => savedCar.id !== car.id)
		);
	};
	return (
		<div className='saved-item-card'>
			<img
				className='saved-item-img'
				src={`http://52.41.36.82:4000${car.img_src}`}
				alt={`${car.brand} ${car.model}`}
			/>
			<div className='saved-item-info'>
				<div className='saved-car-about'>
					<div className='saved-item-name h2-title'>
						{car.brand} {car.model}
					</div>
					<div className='saved-item-description p1-text'>
						{car.description}
					</div>
					<div className='saved-item-model-year p1-text'>
						Год: {car.model_year}
					</div>
					<div className='saved-item-color p1-text'>Цвет: {car.color}</div>
				</div>
				<div className='saved-item-price h3-title'>
					от ${formatPrice(car.price)}
				</div>
				<div className='saved-item-btns'>
					<SelectComplBtn />
					<TrashBtn remover={removeCar} />
				</div>
			</div>
		</div>
	);
};

export default SavedCarCard;
