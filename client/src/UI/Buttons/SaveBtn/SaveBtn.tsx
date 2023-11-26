import './style.css';

interface SaveBtnProps {
	carSaver: (e: React.MouseEvent<HTMLButtonElement>) => void;
	status: boolean;
	saveStatus: boolean;
}

const SaveBtn: React.FC<SaveBtnProps> = ({ status, carSaver, saveStatus }) => {
	const btnSwitcher = (e: React.MouseEvent<HTMLButtonElement>): void => {
		e.currentTarget.classList.toggle('active-save-btn');
		if (carSaver) {
			carSaver(e);
		}
	};

	return status ? (
		saveStatus ? (
			<button
				className='save-btn active-save-btn'
				id={`save-btn`}
				onClick={(e) => btnSwitcher(e)}
			/>
		) : (
			<button
				className='save-btn'
				id={`save-btn`}
				onClick={(e) => btnSwitcher(e)}
			/>
		)
	) : (
		<button className='save-btn' disabled />
	);
};

export default SaveBtn;
