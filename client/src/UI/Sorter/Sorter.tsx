import './style.css';
import React from 'react';

const Sorter: React.FC<{
	handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}> = ({ handleSort }) => {
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
			<select className='sorter h4-title' name='sorter' onChange={handleSort}>
				<option value='availability'>Сначала в наличии</option>
				<option value='a-z'>По имени (A-Z)</option>
				<option value='z-a'>По имени (Z-A)</option>
				<option value='new-first'>Сначала новее</option>
				<option value='old-first'>Сначала старше</option>
				<option value='lowPrice'>Сначала дешевле</option>
				<option value='highPrice'>Сначала дороже</option>
			</select>
		</div>
	);
};

export default Sorter;
