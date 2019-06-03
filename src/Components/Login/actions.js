import * as types from './actionTypes';
import { firebase, googleAuthProvider } from '../firebase/firebase';

export const SetUser = (userData) => (dispatch) => {
    dispatch({ type: types.SET_USER, userData });
};

export const Login = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

export const Logout = () => (dispatch) => {
    firebase.auth().signOut();
    dispatch(SetUser({}))
}


