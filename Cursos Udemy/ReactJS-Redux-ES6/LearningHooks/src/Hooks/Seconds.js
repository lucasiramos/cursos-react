import { useState, useEffect } from 'react';

const Seconds = () => {
	/*state = { seconds: 0 };

	componentDidMount() {
		this.intervalId = setInterval(() => {
			this.setState(state => ({ seconds: state.seconds + 1 }));
		}, 1000)  
	}

	componentWillMount() {
		clearInterval(this.intervalId);
	}*/

	const [ seconds, setSeconds ] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSeconds(seconds + 1);
		}, 1000)

		// La función de retorno en estos casos sirve para limpiar lo que necesitemos
		return () => {
			clearInterval(intervalId);
		}

	}, [seconds]);

	
	return seconds;
}

export default Seconds;