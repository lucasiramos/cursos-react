import React from 'react'

import CustomersListItem from './CustomersListItem'

const CustomersList = ({ customers, urlPath }) => {
	return (
		<div>
			<div className="customers-list">
				{
					customers.map(
						c => <CustomersListItem 
							key={c.dni}
							dni={c.dni}
							name={c.name} 
							editAction={'Editar'}
							delAction={'Borrar'} 
							urlPath={urlPath} />
					)
				}
			</div>
		</div>
	)
}

export default CustomersList