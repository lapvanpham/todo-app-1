import './TodoItem.css';

export default function TodoItem({ todo, todos, setTodos }) {
	const deleteHandler = (e) => {
		e.stopPropagation();
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	const completedHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...todo, completed: !todo.completed };
				}
				return item;
			}),
		);
	};

	return (
		<li
			todo={todo}
			onClick={completedHandler}
			className={todo.completed ? 'completed' : ''}
		>
			{todo.text}
			<span className='close' onClick={deleteHandler}>
				❌
			</span>
		</li>
	);
}
