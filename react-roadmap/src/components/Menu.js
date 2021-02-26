import {Link} from "react-router-dom";

function Menu(){
	return(
		<>
			<Link to={'/'}>Home</Link>&nbsp;
			<Link to={'/async'}>Async</Link>&nbsp;
			<Link to={'/esseis'}>ES 6</Link>&nbsp;
			<Link to={'/states'}>States</Link>&nbsp;
			<Link to={'/props'}>Props</Link>&nbsp;
			<Link to={'/useeffect'}>UseEffect</Link>&nbsp;
			<Link to={'/actualizarcontext'}>Actualizar Context</Link>&nbsp;
			<Link to={'/usememo'}>UseMemo</Link>&nbsp;
			<Link to={'/useref'}>UseRef</Link>&nbsp;
			<Link to={'/usereducer'}>UseReducer</Link>&nbsp;
			<Link to={'/usereducercomplejo'}>UseReducer complejo</Link>&nbsp;
			<Link to={'/hoc'}>HOC</Link>&nbsp;
			<Link to={'/styledcomponents'}>Styled components</Link>&nbsp;
		</>
	)
}

export default Menu