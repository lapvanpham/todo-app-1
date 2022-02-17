import './Header.css';

export default function Header({ inputValue, handleInputValueChange, handleSubmit }) {
	return (
		<form onSubmit={handleSubmit}>
			<input
				value={inputValue}
				placeholder='Add a task'
				type='text'
				onChange={handleInputValueChange}
			/>
			<button onClick={handleSubmit}>Add</button>
		</form>
	);
}
