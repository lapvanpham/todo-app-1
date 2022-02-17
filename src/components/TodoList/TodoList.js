import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos, handleTodoItemClick }) {
	return (
		<ul>
			{todos.map((todo) => {
				return (
					<TodoItem
						// handleTodoItemClick={handleTodoItemClick}
						key={todo.id}
						todo={todo}
					/>
				);
			})}
		</ul>
	);
}

export default TodoList;
