import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "./../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginByEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase
      .singInUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        console.log(err);
      });
  };
};
export const startRegisterWithEmailPassword = (name, email, password) => {
  return (dispatch) => {
    firebase
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.UpdateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const startLoginByGoogleAccount = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
