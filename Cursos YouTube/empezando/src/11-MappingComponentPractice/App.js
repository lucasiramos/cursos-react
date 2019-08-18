import React from 'react'

import SchoolItem from './SchoolItem'
import SchoolItem_data from './SchoolItems_data'

//const Items = SchoolItem_data.map(item => <SchoolItem key={item.id} nombre={item.nombre} descripcion={item.descripcion} precio={item.precio} />)

const Items = SchoolItem_data.map(item => <SchoolItem key={item.id} infoProducto={{nombre:item.nombre, descripcion:item.descripcion, precio:item.precio}} />)

function App(){
	return(
		<div>
			{Items}
		</div>
	)
}

export default App