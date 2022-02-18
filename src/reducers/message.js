import * as TYPE from "../actions/types.js";

const initialState = {};
export default function messageReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case TYPE.SET_MESSAGE:
            return { message: payload };
        case TYPE.CLEAR_MESSAGE:
            return { message: "" };
        default:
            return state;
    }
}