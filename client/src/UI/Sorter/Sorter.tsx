import './style.css';

const Sorter = () => {
	return (
		<div className='sorter-wrapper'>
			<svg
				className='sorter-icon'
				xmlns='http://www.w3.org/2000/svg'
				width='11'
				height='12'
				viewBox='0 0 11 12'
				fill='none'
			>
				<path
					d='M5.05342 3.90121L5.94658 3L2.97329 0L0 3L0.893155 3.90121L2.34161 2.43977V9.82409H3.60497V2.43977L5.05342 3.90121Z'
					fill='black'
				/>
				<path
					d='M10.1069 8.09866L8.6584 9.5601V2.17578H7.39505V9.5601L5.94659 8.09866L5.05344 8.99987L8.02672 11.9999L11 8.99987L10.1069 8.09866Z'
					fill='black'
				/>
			</svg>
			<select className='sorter h4-title' name='sorter'>
				<option value='Сначала в наличии'> Сначала в наличии</option>
				<option value='По имени (A-Z)'>По имени (A-Z)</option>
				<option value='По имени (Z-A)'>По имени (Z-A)</option>
				<option value='Сначала новее'>Сначала новее</option>
				<option value='Сначала старше'>Сначала старше</option>
				<option value='Сначала дешевле'>Сначала дешевле</option>
				<option value='Сначала дороже'>Сначала дороже</option>
			</select>
		</div>
	);
};

export default Sorter;
