import React, { useState } from 'react'
import TodoList from './TodoList'

const App = (props) => {

	const [todos, setTodos] = useState([
		{ id: 1, title: 'First todo', completed: false },
		{ id: 2, title: 'Second todo', completed: true },
	])

	const [todoTitle, setTodoTitle] = useState('');

	const onChangeTodoTitle = (e) => {
		setTodoTitle(e.target.value);
	}

	const addTodo = (e) => {
		if (e.key === 'Enter') {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: todoTitle,
					completed: false
				}
			])
			setTodoTitle('');
		}
	}

	return (
		<div className="container">
			<h2>Todo app</h2>

			<div className="input-field">
				<input type="text"
					onChange={onChangeTodoTitle}
					value={todoTitle}
					onKeyPress={addTodo}
				/>
				<label>Todo name</label>
			</div>

			<TodoList todos={todos} />
		</div>
	);
}

export default App;
