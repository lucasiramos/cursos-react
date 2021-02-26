import { ACTIONS } from '../UseReducerComplejo'

function Todo({ todo, dispatch }){
	return(
		<>
			<span style={{ color: todo.completed ? '#AAA' : '#000' }}>{todo.name}</span>
			<button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })}>Toggle</button>
			<button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id} })}>Delete</button>
			<br/>
		</>
	)
}

export default Todo