import { action, makeAutoObservable, makeObservable, observable } from 'mobx';

class SearchStore {
	searchValue: string = '';
	constructor() {
		makeAutoObservable(this);
	}
	setValue = (value: string) => {
		this.searchValue = value;
	};
}

export default new SearchStore();
