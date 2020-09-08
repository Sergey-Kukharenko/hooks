import React from 'react';
import {useAlert} from "./alert/AlertContext";

const Main = () => {
    const {toggle} = useAlert()
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button className="btn btn-success" onClick={toggle}>Показать Alert</button>
        </>
    );
};
export default Main;
