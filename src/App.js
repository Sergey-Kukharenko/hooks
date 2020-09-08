import React, {useEffect, useMemo, useState} from 'react';

function complexCompute(num) {
    console.log('complexCompute')
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}

function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)


    // #1

    // const styles = useMemo(() => {
    //         return {
    //             color: colored ? 'darkred' : 'black'
    //         }
    //     }
    // )

    // с помощью useMemo мы кешируем нашу ф-ию с number,
    // тем самым более не вызываем ф-ию при изменении
    // св-ва colored
    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    // #2
    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    useEffect(() => {
        console.log('Styles changed')
    }, [styles])

    // !useMemo вызывать в тех случаях, когда это может ударить по производительности

    return (
        <div className="App">
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)} className={'btn btn-success'}>Добавить</button>
            <button onClick={() => setNumber(prev => prev - 1)} className={'btn btn-danger'}>Убрать</button>
            <button onClick={() => setColored(prev => !prev)} className={'btn btn-warning'}>Изменить</button>
        </div>
    );
}

export default App;
