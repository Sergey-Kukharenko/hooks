import React, {useCallback, useState} from 'react';
import ItemsList from "./ItemsList";

function App() {

    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    // useCallback хорошо использовать при запросе к серверу,
    // происходит вызов ф- ии, а не render всего компонента
    // generateItemsFromAPI - ф - ия, а не результат выполнения ф -ии
    const generateItemsFromAPI = useCallback((indexItem) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + indexItem}`)
    }, [count])

    return (
        <div className="App">
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button className={'btn btn-success'} onClick={() => setCount(prev => prev + 1)}>Добавить</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Изменить</button>

            <ItemsList getItems={generateItemsFromAPI}/>
        </div>
    );
}

export default App;
