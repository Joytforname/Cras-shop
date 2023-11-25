import './style.css';

interface SaveBtnProps {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	status: boolean;
}

const SaveBtn: React.FC<SaveBtnProps> = ({ status, onClick }) => {
	const btnSwitcher = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.currentTarget.classList.toggle('active');
		if (onClick) {
			onClick(e); 
		}
	};

	return status ? (
		<button
			className='save-btn'
			id={`save-btn`}
			onClick={(e) => btnSwitcher(e)}
		/>
	) : (
		<button className='save-btn' disabled />
	);
};

export default SaveBtn;
