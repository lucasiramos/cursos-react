import React from 'react'

class MemeGenerator extends React.Component{
	constructor(){
		super()
		this.state = {
			topText: "",
			bottomText: "",
			randomImage: "Meme-Imagenes/1.jpg",
			allMemeImgs: [{id: 1, url: "Meme-Imagenes/1.jpg"}, {id: 2, url: "Meme-Imagenes/2.jpg"}, {id: 3, url: "Meme-Imagenes/3.jpg"}, {id: 4, url: "Meme-Imagenes/4.jpg"}]
		}

		this.handleChanges = this.handleChanges.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChanges(event){
		const {name, value} = event.target
		this.setState({[name]: value})
	}

	handleSubmit(event){
		event.preventDefault()

		const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randomMeme = this.state.allMemeImgs[randomNum].url

		this.setState({randomImage: randomMeme})
	}

	componentDidMount(){
		//Aca va una llamada a https://api.imgflip.com/get_memes
		/*const dataFetch = [{id: 1, url: "Meme-Imagenes/1.jpg"}, {id: 2, url: "Meme-Imagenes/2.jpg"}, {id: 3, url: "Meme-Imagenes/3.jpg"}, {id: 4, url: "Meme-Imagenes/4.jpg"}] // --> Esto no funca, no se porqué...

		this.setState({allMemeImgs: dataFetch})*/
	}

	render(){
		return(
			<div>
				<form className="meme-form" onSubmit={this.handleSubmit}>
					<input type="text" name="topText" placeholder="Top text" value={this.state.topText} onChange={this.handleChanges} /> &nbsp;
					<input type="text" name="bottomText" placeholder="Bottom text" value={this.state.bottomText} onChange={this.handleChanges} />
					<br /><br />

					<button>Gen</button>
				</form>
				<div className="meme">
					<img src={this.state.randomImage} alt="Imagen random"/>
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</div>
		)
	}
}

export default MemeGenerator