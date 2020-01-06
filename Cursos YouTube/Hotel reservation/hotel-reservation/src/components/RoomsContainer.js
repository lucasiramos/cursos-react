import React from 'react'

import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'

import {RoomConsumer} from './../Context'
import Loading from './Loading'

import items from './../data'

export default function RoomsContainer(){
	const formatData = items => {
		let tempItems = items.map(item => {
			let id = item.sys.id
			let images = item.fields.images.map(image => image.fields.file.url)
			let room = { ...item.fields, images, id}

			return room
		})

		return tempItems
	}

	return(
		<RoomConsumer>
			{
				(value) => {
					console.log(value)
					const rooms = formatData(items)
					let loading = false
					let sortedRooms = rooms
					console.log(rooms)

					return (
						<div>
							<RoomsFilter rooms={rooms}/>
							<RoomsList rooms={sortedRooms}/>
						</div>
					)
				}
			}
		</RoomConsumer>
		
	)
}