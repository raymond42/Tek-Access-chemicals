import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { getAuth, deleteAuth } from '../../actions/auth';

export class Users extends Component
{
    componentDidMount()
    {
        this.props.getAuth();
    }
    render()
    {
        return (
            <Fragment>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.auth.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={this.props.deleteAuth.bind(
                                    this, user.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer.auth
});

const mapDispatchToProps = {
    getAuth,
    deleteAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
