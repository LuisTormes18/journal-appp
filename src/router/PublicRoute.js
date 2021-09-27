import React from 'react'
import { Route, Redirect } from "react-router-dom";


export default function PublicRoute({component:Component,isAuthenticate,...rest}) {

	return (
		
    <Route {...rest}>
      { !isAuthenticate? <Component /> : <Redirect to="/" />}
    </Route>
 
	)
}