import {useState} from 'react'

import ActualizarContext from './ActualizarContext'

function States(){
	const [stForm, setForm] = useState({
		firstName: "",
		lastName: ""
	})

	const handleChange = evt => {
		const value = evt.target.value;
		
		setForm({
			...stForm,
			[evt.target.name]: value
		});
	}

	const handleClick = () =>{
		alert(`${stForm.firstName}, ${stForm.lastName}`)
	}

	return(
		<>
			<h1>States</h1>

			<input type="text" name="firstName" value={stForm.firstName} onChange={handleChange} />
			<input type="text" name="lastName" value={stForm.lastName} onChange={handleChange} />

			<br/>
			<button onClick={handleClick}>Alert ApeNom</button>
			<p>{`${stForm.firstName}, ${stForm.lastName}`}</p>
			<hr/>
			<ActualizarContext/>
		</>
	)
}

export default States