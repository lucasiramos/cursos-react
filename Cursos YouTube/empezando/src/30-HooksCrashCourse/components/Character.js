import React, { useEffect } from 'react';

import { useHttp } from './../hooks/http'

import Summary from './Summary';

const Character = props => {
	// Para usar shouldComponentUpdate tengo que envolver el export con memo (ver abajo del todo!)
	/*shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate');
		return (
			nextProps.selectedChar !== this.props.selectedChar ||
			nextState.loadedCharacter.id !== loadedCharacter.id ||
			nextState.isLoading !== isLoading
		);
	}*/

	const [isLoading, fetchedData] = useHttp('https://swapi.co/api/people/' + props.selectedChar, [props.selectedChar])

	let loadedCharacter = null

	if(fetchedData){
		loadedCharacter = {
			id: props.selectedChar,
			name: fetchedData.name,
			height: fetchedData.height,
			colors: {
				hair: fetchedData.hair_color,
				skin: fetchedData.skin_color
			},
			gender: fetchedData.gender,
			movieCount: fetchedData.films.length
		};
	}

	/*const fetchData = () => {
		console.log(
			'Sending Http request for new character with id ' +
				props.selectedChar
		);

		setIsLoading(true);
		
		fetch('https://swapi.co/api/people/' + props.selectedChar)
			.then(response => {
				if (!response.ok) {
					throw new Error('Could not fetch person!');
				}
				return response.json();
			})
			.then(charData => {
				

				setIsLoading(false);
				setLoadedCharacter(loadedCharacter)
			})
			.catch(err => {
				console.log(err);
				setIsLoading(false);
			});
	};*/

	/*useEffect(() => {
		console.log("Using effects")
		fetchData();

		// Se ejecuta antes de disparar una nueva llamada de useEffect
		return(() => {
			console.log("Cleaning up the mess....(limpiar intervalos, por ejemplo)")
		})
	}, [props.selectedChar])*/

	//Si quiero emular componentDidUnmount(), cuando sale el componente definitivamente de pantalla puedo poner:
	/*useEffect(() => {
		// Esto se ejecuta cuando el componente sale de la pantalla, no en cada re-render
		return(() => {
			console.log("Component did unmount")
		})
	}, [])*/

	// Puedo poner varios useEffects
	
	let content = <p>Loading Character...</p>;

	if (!isLoading && loadedCharacter) {
		content = (
			<Summary
				name={loadedCharacter.name}
				gender={loadedCharacter.gender}
				height={loadedCharacter.height}
				hairColor={loadedCharacter.colors.hair}
				skinColor={loadedCharacter.colors.skin}
				movieCount={loadedCharacter.movieCount} />
		);
	} else if (!isLoading && !loadedCharacter) {
		content = <p>Failed to fetch character.</p>;
	}
	return content;

}

// React memo se acuerda de sus propiedades, si cambió alguna, re-renderiza
export default React.memo(Character);
