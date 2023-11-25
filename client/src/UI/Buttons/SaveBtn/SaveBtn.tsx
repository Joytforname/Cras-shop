import './style.css';

interface SaveBtnProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SaveBtn: React.FC<SaveBtnProps> = ({ onClick }) => {
	const btnSwitcher = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.currentTarget.classList.toggle('active');
	};

	return (
		<button
			className='save-btn'
			id={`save-btn`}
			onClick={(e) => btnSwitcher(e)}
		/>
	);
};

export default SaveBtn;
