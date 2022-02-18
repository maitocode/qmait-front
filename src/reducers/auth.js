import * as TYPE from "../actions/types";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export default function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case TYPE.REGISTER_SUCCESS:
            return { ...state, isLoggedIn: false }
        case TYPE.REGISTER_FAIL:
            return { ...state, isLoggedIn: false };
        case TYPE.LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: payload.user };
        case TYPE.LOGIN_FAIL:
            return { ...state, isLoggedIn: false, user: null };
        case TYPE.LOGOUT:
            return { ...state, isLoggedIn: false, user: null };
        default:
            return state;
    }
}