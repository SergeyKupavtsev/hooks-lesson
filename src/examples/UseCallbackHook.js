import React, { useCallback, useEffect, useState } from 'react';
import ItemsList from '../ItemsList';


const UseCallbackHook = () => {
    const [number, setNumber] = useState(10)
    const [colored, setColored] = useState(false)

    const styles = {
        backgroundColor: colored ? 'darkred' : '#f1f1f1'
    }

    // Получаем элементы через апи
    const getItemsFromAPI = useCallback(() => {
        return new Array(number).fill("").map((_, index) => `Элемент ${index}`)
    }, [number])


    return (
        <>
            <h1 style={styles}>Вычисляемое свойство: {number}</h1>
            <button className='button' onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
            <button className='button' onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
            <button className='button' onClick={() => setColored(prev => !prev)}>Изменить</button>

            <ItemsList getItems={getItemsFromAPI} />

        </>
    )
};

export default UseCallbackHook;