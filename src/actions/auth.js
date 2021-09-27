import Swal from 'sweetalert2';

import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "./../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginByEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        dispatch(finishLoading());
        Swal.fire('Error',err.message,'error')
      });
  };
};
export const startRegisterWithEmailPassword = (name, email, password) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        Swal.fire('Error',err.message,'error')
        
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
    name:displayName,
  },
});


export const starLogout = () => {
 
 return (dispatch) =>{
firebase.auth().signOut()
.then(()=>{ dispatch(logout())})
.catch(err=>{
  {console.log(err)}
})
}
}

export const logout = () => ({type: types.logout});