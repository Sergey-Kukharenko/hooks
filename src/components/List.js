import React, {useContext, useEffect} from 'react';
import {NotesContext} from "../context/notes/NotesContext";
import Item from "./Item";

const List = () => {

    const {fetchNotes, state} = useContext(NotesContext)

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        state.map(item => <Item key={item.id} item={item}/>)
    );
};

export default List;
