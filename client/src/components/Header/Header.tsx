import './style.css';
import logo from './img/logo.svg';
import heart from './img/heart.svg';
import CtalogBtn from '../../UI/Buttons/CatalogBtn/CatalogBtn';
import { NavLink } from 'react-router-dom';

const Heder = () => {
	return (
		<div className='header'>
			<NavLink to='/'>
				<div className='logo'></div>
			</NavLink>
			<NavLink className='link h3-title' to='/'>
				<CtalogBtn />
			</NavLink>

			<div className='contacts'>
				<div className='location h4-title'>
					Москва, Волгоградский пр-кт, 43, стр 1
				</div>
				<div className='tel h4-title'>+7 000 111 22 22</div>
			</div>
			<NavLink to='/favorites' className='link h3-title'>
				<div className='saved-btn'>
					<span className='heart'></span>

					<div className='h4-title'>Избранное</div>
				</div>
			</NavLink>
		</div>
	);
};

export default Heder;
