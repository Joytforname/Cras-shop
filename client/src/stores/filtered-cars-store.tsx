import { makeAutoObservable } from 'mobx';
import { Car } from '../graphql/generated';

class FilteredCarsStore {
	filteredCars: Car[] = [];
	constructor() {
		makeAutoObservable(this);
	}
	setFilteredCars = (value: Car[]) => {
		this.filteredCars = value;
	};
}

export default new FilteredCarsStore();
