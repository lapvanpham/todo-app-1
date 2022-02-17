import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList.js';
import Header from './components/Header/Header';

function App() {
	const TODOS = [
		{
			isComplete: false,
			text: 'Hit the bar',
		},
		{
			isComplete: true,
			text: 'Buy Milk',
		},
		{
			isComplete: false,
			text: 'Walk the dog',
		},
		{
			isComplete: false,
			text: 'Feed the cat',
		},
		{
			isComplete: true,
			text: 'Read a book',
		},
		{
			isComplete: false,
			text: 'Practice French horn',
		},
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

	return (
		<div className='App'>
			<h2>REACT todo app</h2>
			<Header
				inputValue={inputValue}
				handleInputValueChange={handleInputValueChange}
				handleSubmit={handleSubmit}
			/>
			<TodoList todos={todos} />
		</div>
	);
}

export default App;
