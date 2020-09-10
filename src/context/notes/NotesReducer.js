import {FETCH_NOTES} from "../types";

export default (state = [], {type, payload}) => {
    switch (type) {
        case FETCH_NOTES:

            return [
                ...state,
                ...payload
            ]

        default:
            return state;
    }
}
