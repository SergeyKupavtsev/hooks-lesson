import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    const [typeData, setTypeData] = useState("")
    const [count, setCount] = useState(0)
    // // Будет вызываться при КАЖДОМ перерендере
    // useEffect(() => {
    //     console.log("Рендер каждый");
    // })

    // Будет вызываться ТОЛЬКО при изменении typeData
    useEffect(() => {
        console.log("Рендер при изменении typeData");
        // Запрашиваем данные в зависимости от типа
        fetch('https://jsonplaceholder.typicode.com/' + typeData + '/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [typeData])


    useEffect(() => {
        // Функция
    }, [/* Параметры */])

    // Будет вызван ТОЛЬКО при первом рендере
    useEffect(() => {
        console.log("Вызов при первом рендере");
        setCount(0);
        setTypeData("posts");
    }, [])
    return (
        <div>
            <h2>Тип данных: {typeData}</h2>
            <button onClick={() => setTypeData("posts")}>Posts</button>
            <button onClick={() => setTypeData("photos")}>Photos</button>
            <button onClick={() => setTypeData("comments")}>Comments</button>

            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
};


export default UseEffectHook;