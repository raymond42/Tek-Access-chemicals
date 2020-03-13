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
import Register from './account/Register';
import Login from './account/Login';
import Dashboard from './layout/Dashboard';
import Homepage from './homepage/Homepage';
import About from './about/About';
import PrivateRoute from './common/PrivateRoute';
import store from '../store';
import { loadUser } from '../actions/auth'
import 'babel-polyfill';
import '../assets/scss/nav.scss';


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
                        <nav className="App">
                            <Fragment>
                                <Header />
                                <Switch>
                                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/homepage" component={Homepage} />
                                    <Route exact path="/about" component={About} />
                                    <Route exact path="/" component={Homepage} />
                                </Switch>
                            </Fragment>
                        </nav>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
