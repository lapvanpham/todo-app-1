import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList.js';
import Form from './components/Form/Form.js';

function App() {
	const localTodos = JSON.parse(localStorage.getItem('localTodos'));

	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState(localTodos || []);
	const [completedStatus, setCompletedStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState(todos);

	const filterHandler = () => {
		switch (completedStatus) {
			case 'completed':
				setFilteredTodos(todos.filter((item) => item.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((item) => item.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	const saveTodosToLocal = () => {
		localStorage.setItem('localTodos', JSON.stringify(todos));
	};

	useEffect(() => {
		filterHandler();
	}, [todos, completedStatus]);

	useEffect(() => {
		saveTodosToLocal();
	}, [todos]);

	return (
		<>
			<div id='myDIV' className='header'>
				<h2>My today's task</h2>
				<Form
					inputValue={inputValue}
					setInputValue={setInputValue}
					todos={todos}
					setTodos={setTodos}
					completedStatus={completedStatus}
					setCompletedStatus={setCompletedStatus}
				/>
			</div>

			<TodoList
				todos={filteredTodos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
				setFilteredTodos={setFilteredTodos}
			/>
		</>
	);
}

export default App;
