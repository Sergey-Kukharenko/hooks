import React, {useEffect, useState} from 'react';

const useLogger = (value) => {
    useEffect(() => {
        console.log('Value changed', value)
    }, [value])
}

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

function App() {

    const input = useInput('')
    const lastName = useInput('')

    useLogger(input.value)

    return (
        <div className="container pt-3">

            {/*Длинная запись*/}
            {/*<input type="text" value={input.value} onChange={input.onChange}/>*/}

            {/*Короткая запись, так как ключи совпадают*/}
            <input type="text" {...input.bind}/>
            <button className="btn btn-warning" onClick={() => input.clear()}>Очистить</button>

            <input type="text" {...lastName.bind}/>
            <button className="btn btn-warning" onClick={() => lastName.clear()}>Очистить</button>
            <hr/>
            <h1>{input.value}</h1>
            <h1>{lastName.value}</h1>
        </div>
    );
}

export default App;
