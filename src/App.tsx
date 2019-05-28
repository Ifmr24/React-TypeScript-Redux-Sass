// Modulos
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './scss/main.scss';
// Componentes, Layouts
import Index from './components/Index'
import Base from './layouts/Base';


const App: React.FC = () => {
  	return (
		<Router>
			<Base>
				<Switch>    
					<Route exact path="/" component={Index} ></Route>
				</Switch>
			</Base>
        </Router>
  	);
}

export default App;
