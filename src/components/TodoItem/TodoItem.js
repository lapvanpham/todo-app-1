import './TodoItem.css';

export default function TodoItem({ todo }) {
	function handleTodoItemClick(e) {}
	let itemClass = todo.isCompleted ? 'test' : '';
	return (
		<li className={todo.isComplete ? 'complete' : ''} onClick={handleTodoItemClick}>
			{todo.text}
		</li>
	);
}
