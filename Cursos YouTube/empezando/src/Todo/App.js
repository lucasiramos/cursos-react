import React from "react"

import TodoItem from "./TodoItem"
import Todos_data from "./Todos_data"

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			todos: Todos_data
		}
		this.handleChange = this.handleChange.bind(this)
	}	

	handleChange(id){
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if(todo.id === id){
					todo.completed = !todo.completed
				}
				return todo
			})
			return {
				todos: updatedTodos
			}
		})
	}

	render(){
		//const TodosItems = Todos_data.map(item => <TodoItem key={item.id} todoInfo={{text: item.text, completed: item.completed}} />)
		const TodosItems = this.state.todos.map(item => <TodoItem key={item.id} todoInfo={item} handleChange={this.handleChange} />)

		return(
			<div className="todo-list">
				{TodosItems}
			</div>
		)
	}
}

export default App