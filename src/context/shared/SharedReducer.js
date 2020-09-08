import {CLEAR_ERROR, ERROR, LOADING} from "../types";

const initialState = {
    loading: false,
    error: null
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOADING:
            return {
                ...state,
                loading: payload
            }

        case ERROR:
            return {
                ...state,
                error: payload
            }

        case CLEAR_ERROR:
            return {
                ...state,
                error: payload
            }

        default:
            return state;
    }
}
