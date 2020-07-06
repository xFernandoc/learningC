import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Resultados from './components/resultados'
import Detalles from './components/detalles'
import store from './redux/store'

const Root = ( 
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Resultados} />
                <Route path="/detalle/:itemId" component={Detalles} />
                <Redirect from="/" to="/results" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
