import './TodoList.css';
import { nanoid } from 'nanoid';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos }) {
	return (
		<ul>
			{todos.map((todo) => {
				return <TodoItem key={nanoid()} todo={todo} />;
			})}
		</ul>
	);
}

export default TodoList;
