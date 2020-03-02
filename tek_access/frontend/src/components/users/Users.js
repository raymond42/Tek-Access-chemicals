import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getAuth, deleteAuth } from '../../actions/users';

export class Users extends Component
{
    static propTypes = {
        auth: PropTypes.array.isRequired,
        getAuth: PropTypes.func.isRequired,
        deleteAuth: PropTypes.func.isRequired
    };
    componentDidMount()
    {
        this.props.getAuth();
    }
    render()
    {
        const { auth } = this.props;
        return (
            <Fragment>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {auth.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.message}</td>
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

export default connect(mapStateToProps, { getAuth, deleteAuth })(Users)



// import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getAuth, deleteAuth } from "../../actions/users";

// export class Users extends Component
// {
//     static propTypes = {
//         auth: PropTypes.array.isRequired,
//         getAuth: PropTypes.func.isRequired,
//         deleteAuth: PropTypes.func.isRequired
//     };

//     componentDidMount()
//     {
//         this.props.getAuth();
//     }

//     render()
//     {
//         return (
//             <Fragment>
//                 <h2>Users</h2>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Message</th>
//                             <th />
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.props.auth.map(user => (
//                             <tr key={user.id}>
//                                 <td>{user.id}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.message}</td>
//                                 <td>
//                                     <button
//                                         onClick={this.props.deleteAuth.bind(this, user.id)}
//                                         className="btn btn-danger btn-sm"
//                                     >
//                                         {" "}
//                                         Delete
//                   </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </Fragment>
//         );
//     }
// }

// const mapStateToProps = state => ({
//     auth: state.authReducer.auth
// });

// export default connect(
//     mapStateToProps,
//     { getAuth, deleteAuth }
// )(Users);
