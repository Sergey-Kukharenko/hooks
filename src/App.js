import React from 'react';
import './App.css';
import NotesState from "./context/notes/NotesState";
import List from "./components/List";

function App() {
    return (
        <NotesState>
            <div className="App">
                <h1>Title</h1>

                <List/>
            </div>
        </NotesState>
    );
}

export default App;
