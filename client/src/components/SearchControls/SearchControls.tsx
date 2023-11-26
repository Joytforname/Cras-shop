import Input from '../../UI/Input/Input';
import Sorter from '../../UI/Sorter/Sorter';
import './style.css';

type SearchValues = {
	valueSearch: string;
	onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
	sortFunc: (value: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SearchControls: React.FC<SearchValues> = ({
	valueSearch,
	onChangeSearchValue,
	sortFunc,
}) => {
	return (
		<div className='search-controls'>
			<Sorter handleSort={sortFunc} />
			<Input
				valueSearch={valueSearch}
				onChangeSearchValue={onChangeSearchValue}
			/>
		</div>
	);
};

export default SearchControls;
