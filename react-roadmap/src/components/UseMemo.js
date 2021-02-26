import {useState, useMemo} from 'react'

function UseMemo(){
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	//const [isEven, setIsEven] = useState(true)	

	const incrementOne = () =>{
		setCounterOne(counterOne + 1)

		/*let i = 0
		while(i < 200000000) i ++

		setIsEven(counterOne % 2 === 0)*/
	}

	const incrementTwo = () =>{
		setCounterTwo(counterTwo + 1)
	}
	
	// En este caso usaría useMemo, estoy evitando que se recalcule esta función "pesada" en caso que se renderice el DOM porque cambió counterTwo
	// Yo lo resolvería con un estado, como está comentado, y me evito de traer a la memoria useMemo (no lo importo directamente), y saco esa función	
	const isEven = useMemo(() => {
		let i = 0
		while(i < 200000000) i ++
		return counterOne % 2 === 0
	}, [counterOne])

	return (
		<>
			<h1>UseMemo</h1>
			<div>
				<button onClick={incrementOne}>Count one - {counterOne}</button>
				<span>{ isEven ? " Par" : " Impar"}</span>
			</div>
			<div>
				<button onClick={incrementTwo}>Count two - {counterTwo}</button>
			</div>
		</>
	)
}

export default UseMemo