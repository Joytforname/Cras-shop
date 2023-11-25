import './style.css';

interface StatusProps {
	status: boolean;
}

const BuyBtn = ({ status }: StatusProps) => {
	return status ? (
		<button className=' h4-title buy-btn'>Купить</button>
	) : (
		<button disabled className=' h4-title buy-btn'>
			Купить
		</button>
	);
};

export default BuyBtn;
