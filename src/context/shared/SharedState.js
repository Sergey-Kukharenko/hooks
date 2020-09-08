import React, {useReducer} from 'react';
import SharedReducer from "./SharedReducer";

import {CLEAR_ERROR, ERROR, LOADING} from "../types";

const SharedState = () => {

    const [state, dispatch] = useReducer(SharedReducer, {})

    const loading = payload => async dispatch => {
        dispatch({
            type: LOADING,
            payload: payload
        });
    };

    return (
        <div>

        </div>
    );
};

export default SharedState;
