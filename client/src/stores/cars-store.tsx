import { makeAutoObservable } from 'mobx';
import { Car } from '../graphql/generated';

class CarsStore {
	carsList: Car[] = [];
	constructor() {
		makeAutoObservable(this);
	}
	setCarsList = (value: Car[]) => {
		this.carsList = value;
	};
}

export default new CarsStore();
