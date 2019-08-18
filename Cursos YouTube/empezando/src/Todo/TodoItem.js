import React from "react"

class TodoItem extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(
			<div className="todo-item">
				<input type="checkbox" onChange={() => this.props.handleChange(this.props.todoInfo.id)} checked={this.props.todoInfo.completed} />
				<p className={this.props.todoInfo.completed ? 'todo-item-completed' : 'todo-item-pending'}>{this.props.todoInfo.text}</p>
			</div>	
		)
	}
}

export default TodoItem