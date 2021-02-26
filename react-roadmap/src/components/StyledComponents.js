import styled, { ThemeProvider } from 'styled-components'

const theme = {
	primary: 'teal',
	secondary: 'SteelBlue',
}

const Title = styled.h1`
	color: red;
	font-size: 50px;
	font-family: 'Noto Sans';
`

const Button = styled.button`
	font-family: sans-serif;
	font-size: 1.3rem;
	border: none;
	border-radius: 5px;
	padding: 7px 10px;
	background: ${props => props.primary ? props.theme.primary : props.theme.secondary};
	color: #fff;
	font-family: ${(props) => props.theme.font};
	&:hover{
		background: navy;
	}
`

// background: ${props => props.primary ? 'red' : 'green'};

function StyledComponents(){
	return(
		<>
			<ThemeProvider theme={theme}>
			<Title>Styled Components</Title>
			<form action="">
				<input type="text" />
				<Button>Create</Button>
				<Button primary>Create</Button>
			</form>
			</ThemeProvider>
		</>
	)
}

export default StyledComponents