import React, {useState} from 'react';

function computeInitialCounter() {
    console.log('sd')
    return Math.trunc(Math.random() * 20)
}

function App() {

    // useState вызываем ф-ию, которая обратится
    // к computeInitialCounter() один раз
    // Делается для того, чтобы каждый раз при рендеринге не вызывать ее повторно
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    })

    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    })

    function increment() {
        setCounter((prev) => prev + 1)
        setCounter((prev) => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    // !если не возвращать предыдущее состояние,
    // то мы его вытерем и получим только новое поле

    const updateTitle = () => {
        setState(prev => {
            return {
                ...prev, // вернуть предыдущее состояние
                title: 'Новое название'
            }
        })
    }

    return (
        <div className="App">
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Добавить</button>
            <button onClick={decrement} className="btn btn-danger">Убрать</button>
            <button onClick={updateTitle} className="btn btn-default">Изменить название</button>

            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </div>
    );
}

export default App;
