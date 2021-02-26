import { lazy, Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import GlobalFonts from './components/fonts/fonts';

// Para usar el Context importo de esta manera
import {JugadoresProvider} from './components/context/JugadoresContext'

import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(() => import('./components/Home'))
const Async = lazy(() => import('./components/Async'))
const EsSeis = lazy(() => import('./components/EsSeis'))
const States = lazy(() => import('./components/States'))
const Props = lazy(() => import('./components/Props'))
const UseEffect = lazy(() => import('./components/UseEffect'))
const ActualizarContext = lazy(() => import('./components/ActualizarContext'))
const UseMemo = lazy(() => import('./components/UseMemo'))
const UseRef = lazy(() => import('./components/UseRef'))
const UseReducer = lazy(() => import('./components/UseReducer'))
const UseReducerComplejo = lazy(() => import('./components/UseReducerComplejo'))
const HOC = lazy(() => import('./components/HOC'))
const StyledComponents = lazy(() => import('./components/StyledComponents'))

function App() {
	return (
		<BrowserRouter>
			<JugadoresProvider>
				<GlobalFonts />
				<Header/>
					<Suspense fallback={<div>Cargando...</div>}>
						<Route path="/" component={Home} exact />
						<Route path="/async" component={Async} exact />
						<Route path="/esseis" component={EsSeis} exact />
						<Route path="/states" component={States} exact />
						<Route path="/props" component={Props} exact />
						<Route path="/useeffect" component={UseEffect} exact />
						<Route path="/actualizarcontext" component={ActualizarContext} exact />
						<Route path="/usememo" component={UseMemo} exact />
						<Route path="/useref" component={UseRef} exact />
						<Route path="/usereducer" component={UseReducer} exact />
						<Route path="/usereducercomplejo" component={UseReducerComplejo} exact />
						<Route path="/hoc" component={HOC} exact />
						<Route path="/styledcomponents" component={StyledComponents} exact />
					</Suspense>
				<Footer/>
			</JugadoresProvider>
		</BrowserRouter>
	);
}

export default App;