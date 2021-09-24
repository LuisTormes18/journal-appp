import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import JournalScreen from "./../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
function AppRourter(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={AuthRouter} />
        <Route exact path="/" component={JournalScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRourter;
