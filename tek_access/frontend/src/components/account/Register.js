import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { errorMessage } from '../../actions/messages'

export class Register extends Component
{
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };
    onSubmit = e =>
    {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.errorMessage({ passwordNotMatch: 'Passwords do not match' })
        } else {
            const newUser = {
                username, email, password
            }
            this.props.register(newUser);
        }
    };
    onChange = e =>
        this.setState({ [e.target.name]: e.target.value });
    render()
    {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        const { username, email, password, password2 } = this.props;
        return (
            <div className="container" style={{ marginTop: "10rem" }}>
                <div className="col-md-6 m-auto" >
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Register your account</h2>
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
                                <label>Email</label>
                                <input
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    onChange={this.onChange}
                                    value={email}
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
                                <label>Confirm Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password2"
                                    onChange={this.onChange}
                                    value={password2}
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">
                                    Sign Up
                                </button>
                            </div>
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </form>
                    </div>
                </div >
            </div>
        )
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.accountReducer.isAuthenticated
})
export default connect(mapStateToProps, { register, errorMessage })(Register)
