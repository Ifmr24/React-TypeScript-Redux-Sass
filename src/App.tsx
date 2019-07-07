// Modulos
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

// Componentes, Layouts
import Index from './containers/Index'
import Loader from './components/Loader';

const App: React.FC = () => {
	const all = useSelector((state:any[any]) => state.data);
	const dispatch = useDispatch();

	console.log(all)
	
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Loader>
						<Route component={Index} />
					</Loader>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
