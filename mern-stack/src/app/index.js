import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Login from './components/Login'
import App from './app'

let container = document.getElementById('app');
let component = <BrowserRouter>
    <Switch>
        <Route path="/login" component={Login}/>
        <Redirect from="/" to="/login" />
    </Switch>
</BrowserRouter>
ReactDOM.render(<App/>, container);
