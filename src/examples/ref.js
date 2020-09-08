import React, {useEffect, useRef, useState} from 'react';

function App() {

    // const [renderCount, setRenderCount] = useState(1)
    const [value, setValue] = useState('initial')

    // #1
    // Те состояния, которые мы определяем через hook useRef
    // они сохраняются между рендерами компонента,
    // но при этом, когда мы вызываем useRef, render не происходит!

    const renderCount = useRef(1)

    // #2
    // Получаем ссылки на DOM - элементы
    const inputRef = useRef(null)

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })

    // #3
    // Получаем предыдущее состояние
    const prevValue = useRef('')

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div className="App">
            <h1>Количество рендеров {renderCount.current}</h1>
            <h2>Прошлое состояние {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn-success" onClick={focus}>focus</button>
        </div>
    );
}

export default App;
