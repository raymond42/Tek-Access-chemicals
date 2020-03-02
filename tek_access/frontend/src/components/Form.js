import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/auth";
import 'babel-polyfill';
export class Form extends Component
{
    state = {
        first_name: "",
        last_name: "",
        email: ""
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e =>
    {
        e.preventDefault();
        const { first_name, last_name, email } = this.state;
        const user = { first_name, last_name, email };
        this.props.addUser(user);
        this.setState({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: ""
        });
    };

    render()
    {
        const { first_name, last_name, email, password, confirm_password } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Register your account</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="first_name"
                            onChange={this.onChange}
                            value={first_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="last_name"
                            onChange={this.onChange}
                            value={last_name}
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
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={password}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={confirm_password}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
            </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addUser
}

export default connect(null, mapDispatchToProps)(Form);