import React from 'react';
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({component:Component,isAuthenticate,...rest}) {

	return (
	<Route {...rest}>
      { isAuthenticate? <Component /> : <Redirect to="/auth/login" />}
    </Route>
	)
}

export default PrivateRoute;