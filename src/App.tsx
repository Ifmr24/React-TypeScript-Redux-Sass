// Modulos
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {addPost} from './store/actions';

// Componentes, Layouts
import Index from './containers/Index'
import Loader from './components/Loader';

const App: React.FC = () => {
	// Ejemplo para leer datos.
	const all = useSelector((state:any[any]) => state.data);
	const dispatch = useDispatch();

	console.log(all)
	
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Loader>
						<Route component={Index} />
						{/* Ejemplo Dispatch */}
						<button onClick={() => dispatch(addPost('Nuevo'))}>add</button>
					</Loader>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
