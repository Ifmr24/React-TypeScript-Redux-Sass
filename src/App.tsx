// Modulos
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import {useSelector, useDispatch} from 'react-redux';

// Componentes, Layouts
import Index from './containers/Index';
//import Loader from './components/Loader/Loader';

const App: React.FC = () => {

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Route component={Index} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
