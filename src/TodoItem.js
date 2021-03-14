import React, { useContext } from 'react'
import { Context } from './Context'

const TodoItem = ({ title, id, completed }) => {
	const { dispatch } = useContext(Context);

	const cls = ['todo'];

	if (completed) {
		cls.push('completed');
	}

	const addChecked = () => {
		dispatch({
			type: 'toggle',
			payload: id
		})
	}

	const removeTodo = () => {
		dispatch({
			type: 'remove',
			payload: id
		})
	}

	return (
		<li className={cls.join(' ')}>
			<label>
				<input
					type="checkbox"
					checked={completed}
					onChange={addChecked}
				/>
				<span>{title}</span>

				<i
					className="material-icons red-text"
					onClick={removeTodo}
				>
					delete
        </i>
			</label>
		</li>
	)
}

export default TodoItem;