import * as TYPE from "./types.js";
import * as AUTHSERVICE from "../services/auth.service.js";

export const register = (username, email, password) => (dispatch) => {
    return AUTHSERVICE.register(username, email, password).then(
        (response) => {
            dispatch({ type: TYPE.REGISTER_SUCCESS });
            dispatch({ type: TYPE.SET_MESSAGE, payload: response.data.message });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString()
                ;
            dispatch({ type: TYPE.REGISTER_FAIL, });
            dispatch({ type: TYPE.SET_MESSAGE, payload: message })
            return Promise.reject();
        }
    );
}

export const login = (username, password) => (dispatch) => {
    return AUTHSERVICE.login(username, password).then(
        (data) => {
            dispatch({
                type: TYPE.LOGIN_SUCCESS,
                payload: { user: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response && error.response.data && error.response.data.message)
                || error.message
                || error.toString();
            dispatch({ type: TYPE.LOGIN_FAIL });
            dispatch({ type: TYPE.SET_MESSAGE, payload: message });
            return Promise.reject();
        }
    );
};
export const logout = () => (dispatch) => {
    AUTHSERVICE.logout();
    dispatch({ type: TYPE.LOGOUT });
};
// TODO: CREATE REDUX REDUCERS

