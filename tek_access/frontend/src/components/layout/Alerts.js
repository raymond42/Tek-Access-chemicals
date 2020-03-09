import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
export class Alerts extends Component
{
    componentDidUpdate(prevProps)
    {
        console.log(this.props);

        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.first_name)
                alert.error(`First Name: ${error.msg.first_name.join()}`);
            if (error.msg.last_name)
                alert.error(`Last Name: ${error.msg.last_name.join()}`);
            if (error.msg.email)
                alert.error(`email: ${error.msg.msg.email.join()}`);
            if (error.msg.username)
                alert.error(`username: ${error.msg.username}`);
            if (error.msg.name)
                alert.error(`Name: ${error.msg.msg.name}`);
            if (error.msg.message)
                alert.error(`Message: ${error.msg.message}`);
            if (error.msg.password)
                alert.error(`password: ${error.msg.password}`);
            if (error.msg.non_field_errors)
                alert.error(error.msg.non_field_errors.join());
            if (error.msg.passwordNotMatch)
                alert.error(error.msg.passwordNotMatch);

        }
        if (message !== prevProps.message) {
            if (message.addUser) alert.success(message.addUser);
            if (message.deleteUser) alert.success(message.deleteUser);
        }
    }
    render()
    {
        return <Fragment />
    }
}
const mapStateToProps = state => ({
    error: state.errorsReducer,
    message: state.successMessage
})
export default connect(mapStateToProps)(withAlert()(Alerts));
