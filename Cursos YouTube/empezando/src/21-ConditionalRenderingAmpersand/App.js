import React from 'react'

class App extends React.Component{
	constructor(){
		super()
		this.state = {
			unreadMessages: ["123", "456"]
		}
	}

	render(){
		return(
			/*{
				
				this.state.unreadMessages.length > 0
					? <h1>You have {this.state.unreadMessages.length} new messages</h1>
					: null
			}*/
			// Si no quiero que devuelva nada, como el caso de arriba, puedo reemplazar esta ternaria por &&:
			// O sea, en ifs sin elses

			<div>
				{	
					this.state.unreadMessages.length > 0
						&& <h1>You have {this.state.unreadMessages.length} new messages!</h1>
				}
			</div>
		)
	}
}

export default App