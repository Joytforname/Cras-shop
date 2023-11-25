import { Global } from '@emotion/react';
import { FC, useEffect } from 'react';
import CarsList from './pages/CarsList/CarsList';
import { GLOBAL_STYLES } from './styles/global.styles';
import Header from './components/Header/Header';
import getAllCars from './utils/getCars';
import { useQuery } from 'react-query';
import carsStore from './stores/cars-store';
import SavedCarsList from './pages/SavedCarsList/SavedCarsList';

const App: FC = () => {

	const { data, error, isLoading } = useQuery('cars', getAllCars);
	const { carsList, setCarsList } = carsStore;

	if (data) {
		setCarsList([...data]);
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		<div>Error occurred: {error.toString()}</div>;
	}

	return (
		<div>
			<Header />
			<CarsList cars={carsList} />
			<SavedCarsList />
			<Global styles={GLOBAL_STYLES} />
		</div>
	);
};

export default App;
