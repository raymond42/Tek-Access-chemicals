import React, { Fragment } from "react";
import Form from '../Form';
import Users from "../users/Users";

export default function Dashboard()
{
    return (
        <Fragment>
            <Form />
            <Users />
        </Fragment>
    );
}
