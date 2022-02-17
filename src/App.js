import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList.js';
import Header from './components/Header/Header';

function App() {
	const TODOS = [
		{ id: 'UiMkLBLyB4zy88rHtEGMi', isComplete: false, text: 'Hit the bar' },
		{ id: 'M9d6J5En0Y-azJGEeonEm', isComplete: true, text: 'Buy Milk' },
		{ id: 'GX0hwrK0uIreq1sE7w_Oj', isComplete: false, text: 'Walk the dog' },
		{ id: 'tYfF43PAxHCCcBCwUo1-j', isComplete: false, text: 'Feed the cat' },
		{ id: 'FQ400XisCb75BaEQnqIqk', isComplete: true, text: 'Read a book' },
		{ id: 'y8b9oMZxCo-IeQobsjbgg', isComplete: false, text: 'Practice French horn' },
	];

	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState(TODOS);

	function handleInputValueChange(e) {
		setInputValue(e.target.value);
		console.log(inputValue);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setTodos((prev) => [...prev, { isComplete: false, text: inputValue }]);
		console.log(todos);
		setInputValue('');
	}

	// function handleTodoItemClick() {}

	return (
		<div className='App'>
			<h2>REACT todo app</h2>
			<Header
				inputValue={inputValue}
				handleInputValueChange={handleInputValueChange}
				handleSubmit={handleSubmit}
			/>
			<TodoList
				// handleTodoItemClick={handleTodoItemClick}
				todos={todos}
			/>
		</div>
	);
}

export default App;
