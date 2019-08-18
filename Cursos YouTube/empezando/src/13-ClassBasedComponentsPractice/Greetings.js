import React, {Component} from 'react'

class Greetings extends Component{
	render(){
		const date = new Date()
		const hour = date.getHours()
		let timeOfDay

		if(hour < 12){
			timeOfDay = "morning"
		}else if(hour < 20){
			timeOfDay = "afternoon"
		}else{
			timeOfDay = "night"
		}

		return(
			<h1>Good {timeOfDay} to you, sir or madam!</h1>
		)
	}
}

export default Greetings