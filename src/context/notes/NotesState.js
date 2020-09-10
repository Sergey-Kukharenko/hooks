import React, {useReducer} from 'react';
import NotesReducer from "./NotesReducer";
import data from "../../data/data";
import {FETCH_NOTES} from "../types";
import {NotesContext} from "./NotesContext";

const NotesState = ({children}) => {

    const [state, dispatch] = useReducer(NotesReducer, [])

    const fetchNotes = async () => {
        const payload = data;
        dispatch({type: FETCH_NOTES, payload})
    }

    return (
        <NotesContext.Provider value={{fetchNotes, state}}>
            {children}
        </NotesContext.Provider>
    );
};

export default NotesState;
