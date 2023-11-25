import './style.css';
import logo from './img/logo.svg';
import heart from './img/heart.svg';
import CtalogBtn from '../../UI/Buttons/CatalogBtn/CatalogBtn';

const Heder = () => {
	return (
		<div className='header'>
			<div className="logo"></div>
			<CtalogBtn />
			<div className='contacts'>
				<div className='location h4-title'>
					Москва, Волгоградский пр-кт, 43, стр 1
				</div>
				<div className='tel h4-title'>+7 800 555 35 35</div>
			</div>
			<div className='saved-btn'>
				<span className='heart'></span>
				<div className='h4-title'>Избранное</div>
			</div>
		</div>
	);
};

export default Heder;
