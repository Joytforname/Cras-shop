import { Global } from '@emotion/react';
import { FC, useEffect } from 'react';
import CarsList from './pages/CarsList/CarsList';
import { GLOBAL_STYLES } from './styles/global.styles';
import Header from './components/Header/Header';
import getAllCars from './utils/getCars';
import { useQuery } from 'react-query';
import carsStore from './stores/cars-store';
import SavedCarsList from './pages/SavedCarsList/SavedCarsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: FC = () => {
	const { carsList, setCarsList } = carsStore;
	
		const { data, error, isLoading } = useQuery('cars', getAllCars);

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
		<div className='app'>
			<Router>
				<Header />
				<Routes>
				<Route path='/' element={<CarsList cars={carsList} />} />
				<Route path='/favorites' element={<SavedCarsList />} />
				</Routes>
				<Global styles={GLOBAL_STYLES} />
			</Router>
		</div>
	);
};

export default App;
