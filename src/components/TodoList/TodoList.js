import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos, setTodos, filteredTodos }) {
	return (
		<ul className='myUL'>
			{filteredTodos.map((todo) => {
				return (
					<TodoItem
						todo={todo}
						key={todo.id}
						todos={todos}
						setTodos={setTodos}
					/>
				);
			})}
		</ul>
	);
}

export default TodoList;
