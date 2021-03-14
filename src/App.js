import React, { useEffect, useReducer, useState } from 'react'
import TodoList from './TodoList'
import { Context } from './Context'
import reducer from './reducer';

const App = (props) => {

	const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))

	const [todoTitle, setTodoTitle] = useState('');

	const onChangeTodoTitle = (e) => {
		setTodoTitle(e.target.value);
	}

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state))
	}, [state])

	const addTodo = (e) => {

		if (e.key === 'Enter') {
			dispatch({
				type: 'add',
				payload: todoTitle
			})
			setTodoTitle('');
		}
	}


	return (
		<Context.Provider value={{
			dispatch
		}}>
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

				<TodoList todos={state} />
			</div>
		</Context.Provider>
	);
}

export default App;
