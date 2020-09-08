import React, {useReducer} from 'react';
import SharedReducer from "./SharedReducer";

import {CLEAR_ERROR, ERROR, LOADING} from "../types";
import {SharedContext} from "./SharedContext";

const SharedState = ({children}) => {

    const [state, dispatch] = useReducer(SharedReducer, {})

    const loading = payload => async dispatch => {
        dispatch({
            type: LOADING,
            payload: payload
        });
    };

    const error = payload => async dispatch => {
        dispatch({
            type: ERROR,
            payload: payload
        });
    };

    return (
        <SharedContext.Provider>
            {children}
        </SharedContext.Provider>
    );
};

export default SharedState;
