import './Form.css';

export default function Form({
	inputValue,
	setInputValue,
	todos,
	setTodos,
	completedStatus,
	setCompletedStatus,
}) {
	const inputHandler = (e) => {
		setInputValue(e.target.value);
		console.log(inputValue);
	};

	//add input to todos
	const submitHandler = (e) => {
		e.preventDefault();

		if (inputValue)
			setTodos([
				...todos,
				{ text: inputValue, completed: false, id: Math.random() },
			]);
		setInputValue('');
	};

	const statusHandler = (e) => {
		console.log(e.target.value);

		setCompletedStatus(e.target.value);
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				id='myInput'
				placeholder='Add a task'
				type='text'
				value={inputValue}
				onChange={inputHandler}
			/>
			<span className='addBtn'>Add</span>

			{/* filter */}
			<div className='select'>
				<select name='filter' value={completedStatus} onChange={statusHandler}>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
}
