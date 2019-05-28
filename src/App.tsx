// Modulos
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './scss/main.scss';
// Componentes
import Index from './components/Index'


const App: React.FC = () => {
  	return (
		<Router>
            <Switch>    
                <Route exact path="/" component={Index} />
            </Switch>
        </Router>
  	);
}

export default App;
