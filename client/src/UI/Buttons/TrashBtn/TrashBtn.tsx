import './style.css';
import trashIcon from './img/trashIcon.svg';

const TrashBtn = () => {
	return (
		<button className='trash-btn'>
			<svg
				className='trash-icon'
				xmlns='http://www.w3.org/2000/svg'
				width='18'
				height='19'
				viewBox='0 0 18 19'
			>
				<path d='M2 17C2 18.103 2.897 19 4 19H14C15.103 19 16 18.103 16 17V5H2V17ZM4 7H14L14.002 17H4V7Z' />
				<path d='M12 2V0H6V2H0V4H18V2H12Z' />
				<path d='M8 9H6V15H8V9Z' />
				<path d='M12 9H10V15H12V9Z' />
			</svg>
		</button>
	);
};

export default TrashBtn;
