import React from 'react'
import { Link } from 'react-router-dom'

const CustomersListItem = ({ name, editAction, delAction, urlPath, dni }) => {
	return (
		<div>
			<div className="customers-list-item">
				<div className="field">
					<Link to={`${urlPath}${dni}`}>{name}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
				</div>
				<div className="field">
					<Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
				</div>
			</div>
		</div>
	)
}

export default CustomersListItem