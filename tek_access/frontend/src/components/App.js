import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import
{
    Provider as AlertProvider
} from 'react-alert';
import
{
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Register from './accounts/Register';
import Login from './accounts/Login';
import Dashboard from './layout/Dashboard';
import PrivateRoute from './common/PrivateRoute';
import store from '../store';
import { loadUser } from '../actions/auth'
import 'babel-polyfill';


// alert options
const alertOptions = {
    timeout: 7000,
    position: 'top center'
};
class App extends Component
{
    componentDidMount()
    {
        store.dispatch(loadUser())
    }
    render()
    {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Alerts />
                    <Router>
                        <Fragment>
                            <Header />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
