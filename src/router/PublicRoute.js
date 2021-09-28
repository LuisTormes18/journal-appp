import React from "react";
import { Route, Redirect } from "react-router-dom";

function PublicRoute({ component: Component, isAuthenticate, ...rest }) {
    return (
        <Route {...rest}>
            {!isAuthenticate ? <Component /> : <Redirect to="/" />}
        </Route>
    );
}
export default PublicRoute;
