import * as React from 'react';
import { Route, Switch } from 'react-router';
import LoginComponent from './pages/login/LoginComponent';
import App from './App';

const routes = () => {
    return (
        <div>
            <h3>poop</h3>
            <Switch>
                <Route exact={true} path="/" component={App}/>
                <Route path="/login" compnent={LoginComponent}/>
            </Switch>
        </div>
    );
};

export default routes;