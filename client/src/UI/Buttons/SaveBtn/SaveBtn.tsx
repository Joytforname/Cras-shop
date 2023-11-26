import './style.css';
import savedCarsStore from '../../../stores/saved-cars-store';

interface SaveBtnProps {
	carSaver: (e: React.MouseEvent<HTMLButtonElement>) => void;
	status: boolean;

}

const SaveBtn: React.FC<SaveBtnProps> = ({  status, carSaver }) => {
	const btnSwitcher = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.currentTarget.classList.toggle('active');
		if (carSaver) {
			carSaver(e);
		}
	};

	return status ? (
		<button
			className='save-btn'
			id={`save-btn`}
			onClick={(e) => btnSwitcher(e)}
		/>
	) : (
		<button className='save-btn' disabled />
	);
};

export default SaveBtn;
