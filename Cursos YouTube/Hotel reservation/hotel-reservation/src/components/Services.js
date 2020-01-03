import React, { Component } from 'react'

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

import { Title } from './Title'

class Services extends Component{
	state = {
		services: [
			{
				icon: <FaCocktail/>,
				title: "Free cocktails",
				info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
			},
			{
				icon: <FaHiking/>,
				title: "Endless hiking",
				info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
			},
			{
				icon: <FaShuttleVan/>,
				title: "Free shuttle",
				info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
			},
			{
				icon: <FaBeer/>,
				title: "Strongest beer",
				info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
			},
		]
	}

	render(){
		return(
			<section className="services">
				<Title title="Services"/>
				<div className="services-center">
					{this.state.services.map((item,index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
							)
						}	
					)}
				</div>
			</section>
		)
	}
}

export default Services