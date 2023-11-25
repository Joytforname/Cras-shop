import './style.css';

interface InputProps {
	valueSearch: string;
	onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ valueSearch, onChangeSearchValue }) => {
	return (
		<div className='input-frame'>
			<div className='input-wrapper'>
				<input
					value={valueSearch}
					onChange={onChangeSearchValue}
					className='input'
					type='text'
					placeholder='Найти авто'
					aria-label='Поиск автомобилей'
				/>
				<button className='search-btn' aria-label='Искать'></button>
			</div>
		</div>
	);
};

export default Input;
