import * as React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './pages/navbar/NavbarComponent';
import { BrowserRouter } from 'react-router-dom';
import HomeComponent from './pages/home/HomeComponent';
import LoginPage from './pages/login/LoginPage';
import { Route, Switch } from 'react-router';

const App = () =>  (
    <BrowserRouter>
        <div>
            <NavbarComponent/>

            <Switch>
                <Route exact={true} path="/" component={HomeComponent} />
                <Route path="/login" compnent={LoginPage}/>
                <Route path="/register" compnent={LoginPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
