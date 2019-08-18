import React, {useState} from 'react'

function Todo({ todo, index, completeTodo, removeTodo }){
	return(
		<div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => removeTodo(index)}>X</button>
			</div>
			<div>
			</div>
		</div>
	)
}

function TodoForm({ addTodo }){
	const [value, setValue] = useState('')

	//El value={value} del input lo saca de la línea de arriba!

	const handleSubmit = event => {
		event.preventDefault()

		if(!value) return;
		addTodo(value);
		setValue('');
	}

	return(
		<form onSubmit={handleSubmit}>
			<input type="text" name="text" placeholder="Ingrese texto" value={value} onChange={e => setValue(e.target.value)} />
		</form>
	)

}


function App(){
	//Con esto estoy declarando el objeto
	//'todos' sería el valor del elemento state (this.state.todos)
	//'setTodos' es la función que me va a permitir cambiar ese estado

	const [todos, setTodos] = useState([
		{
			text: "Aprender sobre Hooks",
			isCompleted: false
		},
		{
			text: "Comprar las cosas",
			isCompleted: false
		},
		{
			text: "Lo último de todo",
			isCompleted: false
		}
	])

	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos)
	}

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	}

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1)
		setTodos(newTodos);
	}

	return(
		<div className="app">
			<div className="todo-list">
				{todos.map((todo,index) =>(
					<Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	)
}


export default App