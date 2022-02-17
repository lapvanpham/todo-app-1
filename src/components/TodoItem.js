export default function TodoItem({ todo }) {
	return <li className={todo.isCompleted && 'completed'}>{todo.text}</li>;
}
