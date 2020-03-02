import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Users from './users/Users';
import Form from './Form';
import store from '../store';
import 'babel-polyfill';


// alert options
const alertOptions = {
    timeout: 5000,
    position: 'top center'
};
class App extends Component
{
    render()
    {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Alerts />
                    <Fragment>
                        <Header />

                        <div className="container">
                            <Form />
                            <Users />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
