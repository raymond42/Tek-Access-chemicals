import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
export class Alerts extends Component
{
    componentDidUpdate(prevProps)
    {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.first_name)
                alert.error(`First Name: ${error.msg.first_name.join()}`);

            if (error.msg.last_name)
                alert.error(`Last Name: ${error.msg.last_name.join()}`);

            if (error.msg.email)
                alert.error(`Email: ${error.msg.email.join()}`);

        }
        if (message !== prevProps.message) {
            if (message.addUser) alert.success(message.addUser)
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
