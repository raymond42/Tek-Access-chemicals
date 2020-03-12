import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

export class Login extends Component
{
    state = {
        username: '',
        password: '',
    };

    onSubmit = e =>
    {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };
    onChange = e =>
        this.setState({ [e.target.name]: e.target.value });
    render()
    {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, password } = this.props;
        return (
            <div className="container">
                < div className="col-md-6 m-auto" >
                    <div className="card card-body mt-auto">
                        <h2 className="text-center">Login</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Login
                        </button>
                            </div>
                            <p>Don't have an account? <Link to="/register">Signup</Link></p>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.accountReducer.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
