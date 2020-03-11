import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import '../../assets/scss/nav.scss';
import '../../assets/scss/homepage.scss';
export class Header extends Component
{
    render()
    {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginRight: '-1em' }}>
                <ul className="navbar-nav ml-auto mt-2 mt-sm-0">
                    <span className="navbar-text mr-3">
                        <strong>{user ? `Welcome ${user.username}` : ""}</strong>
                    </span>
                    <li className="nav-item">
                        <Link to="/homepage" className="nav-link">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">ABOUT US</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">PRODUCTS</Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm  text-light">Logout</button>
                    </li>
                </ul>
            </div>
        )
        const guestLinks = (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-sm-auto">
                    <li className="nav-item">
                        <Link to="/homepage" className="nav-link">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">ABOUT US</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">PRODUCTS</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto mt-2 mt-sm-0">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <i className="far fa-user"></i> Users </a>
                        <div className="dropdown-menu">
                            <Link to="/login" className="dropdown-item">Login</Link>
                            <Link to="/register" className="dropdown-item">Sign Up</Link>
                        </div>
                    </li>
                </ul>
            </div>
        )
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/homepage">TekAccess.</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.accountReducer
})

export default connect(mapStateToProps, { logout })(Header)
