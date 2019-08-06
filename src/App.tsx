// Modulos
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// Containers
import Index from './containers/Index';


export const history = createHistory();

const App: React.FC = () => {

	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/">
					<Route component={Index} />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
