import { makeAutoObservable } from 'mobx';
import { Car } from '../graphql/generated';

class SavedCarsStore {
	savedCars: Car[] = [];
	constructor() {
		makeAutoObservable(this);
	}
	setSavedCars = (value: Car[]) => {
		this.savedCars = value;
	};
}

export default new SavedCarsStore();
