import React, { Component } from 'react'

import { RoomContext } from '../Context'

import Loading from './Loading'
import Room from './Room'
import { Title } from './Title'

//Esto no esta en el ejemplo, no se porque no me salió en el momento:
import items from '../data'

class FeaturedRooms extends Component{
	static contextType = RoomContext

	formatData(items){ // That wasn't here when I arrived
		let tempItems = items.map(item => {
			let id = item.sys.id
			let images = item.fields.images.map(image => image.fields.file.url)
			let room = { ...item.fields, images, id}

			return room
		})

		return tempItems.filter(room => room.featured === true)
	}

	render(){
		const featuredRooms = this.formatData(items) // this.context
		const loading = false

		const rooms = featuredRooms.map(room => {
			return <Room key={room.id} room={room} />
		})

		return(
			<section className="featured-rooms">
				<Title title="Featured rooms"/>
				<div className="featured-rooms-center">
					{loading ? <Loading /> : rooms}
				</div>
			</section>
		)
	}
}

export default FeaturedRooms