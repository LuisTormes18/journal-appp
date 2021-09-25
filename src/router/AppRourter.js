import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { firebase } from "../firebase/firebase-config";
import JournalScreen from "./../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
function AppRourter(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

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
