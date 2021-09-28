import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";

import JournalScreen from "./../components/journal/JournalScreen";
import LoadingScreen from "./../components/ui/LoadingScreen";
import { firebase } from "../firebase/firebase-config";
import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";
import { starLoadingNotes } from "../actions/notes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRourter(props) {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isAuthenticate, setIsAuthenticate] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsAuthenticate(true);
                dispatch(starLoadingNotes(user.uid));
            } else {
                setIsAuthenticate(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsAuthenticate]);

    if (checking) {
        return <LoadingScreen />;
    }

    return (
        <BrowserRouter>
            <Switch>
                <PublicRoute
                    path="/auth"
                    isAuthenticate={isAuthenticate}
                    component={AuthRouter}
                />
                <PrivateRoute
                    exact
                    path="/"
                    isAuthenticate={isAuthenticate}
                    component={JournalScreen}
                />
                <Redirect to="/auth/login" />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRourter;
