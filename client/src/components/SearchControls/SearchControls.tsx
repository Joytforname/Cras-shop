import Input from '../../UI/Input/Input';
import Sorter from '../../UI/Sorter/Sorter';
import './style.css';

type SearchValues = {
	valueSearch: string;
	onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchControls: React.FC<SearchValues> = ({
	valueSearch,
	onChangeSearchValue,
}) => {
	return (
		<div className='search-controls'>
			<Sorter />
			<Input
				valueSearch={valueSearch}
				onChangeSearchValue={onChangeSearchValue}
			/>
		</div>
	);
};

export default SearchControls;
