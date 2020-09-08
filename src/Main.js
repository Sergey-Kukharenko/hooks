import React from 'react';
import {useAlert} from "./alert/AlertContext";

const Main = () => {
    const {show} = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button className="btn btn-success" onClick={() => {show('Этот текст из Main.js')}}>Показать Alert</button>
        </>
    );
};
export default Main;
