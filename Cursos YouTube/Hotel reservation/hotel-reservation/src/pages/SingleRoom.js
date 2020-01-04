import React, { Component } from 'react'

import defaultBcg from './../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero'

import { Link } from 'react-router-dom'

//Esto no esta en el ejemplo, no se porque no me salió en el momento:
import items from '../data'

export default class SingleRoom extends Component{
	constructor(props){
		super(props)

		//console.log(this.props)
		this.state = {
			slug: this.props.match.params.slug,
			defaultBcg,
			rooms: this.formatData(items)
		}
	}

	//static contextType = RoomContext 
	getRoom = slug => {
		let tempRooms = [...this.state.rooms]
		const room = tempRooms.find((room) => room.slug === slug)

		return room
	}
	formatData(items){
		let tempItems = items.map(item => {
			let id = item.sys.id
			let images = item.fields.images.map(image => image.fields.file.url)
			let room = { ...item.fields, images, id}

			return room
		})

		return tempItems
	}

	componentDidMount(){
		//console.log(this.getRoom(this.state.slug))
		console.log("Component did mount")
		this.setState({...this.state,room:this.getRoom(this.state.slug)})
	}

	render(){
		//const {getRoom} = this.context
		//const room = this.getRoom(this.state.slug)
		//console.log(room)
		console.log("Render, state:")
		if(!this.state.room){
			return(
				<div>
					Cargando... 
				</div>
			)	
		}else{
			const {name, description, capacity, size, price, extras, breakfast, pets, images} = this.state.room

			const [mainImg,...defaultImg] = images
			return(
				<>
					<StyledHero img={mainImg || this.state.defaultBcg}>
						<Banner title={`${name} room`}>
							<Link to="/rooms" className="btn-primary">
								Back to rooms
							</Link>
						</Banner>
					</StyledHero>
					<section className="single-room">
						<div className="single-room-images">
							{defaultImg.map((item,index) =>{
								return <img key={index} src={item} alt="" />
							})}
						</div>
						<div className="single-room-info">
						<article className="desc">
							<h3>Details</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>Info</h3>
							<h6>Price: ${price}</h6>
							<h6>Size: {size} m2</h6>
							<h6>Max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`}</h6>
							<h6>
								{pets ? "Pets allowed" : "No pets allowed"}
							</h6>
							<h6>
								{breakfast && "Free breakfast included"}
							</h6>
						</article>
						</div>
					</section>
					<section className="room-extras">
						<h6>Extras</h6>
						<ul className="extras">
							{extras.map((item,index) =>{
								return (
									<li key={index}>- {item}</li>
								)
							})}
						</ul>
					</section>
				</>
			)	
		}
	}
}

/*<div>
					SingleRoom {this.state.room.name}
				</div>*/