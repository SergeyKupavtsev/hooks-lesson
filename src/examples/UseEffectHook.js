import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    const [typeData, setTypeData] = useState("posts")
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)
    const [header, setHeader] = useState("Что то загружается")
    // // Будет вызываться при КАЖДОМ перерендере
    // useEffect(() => {
    //     console.log("Рендер каждый");
    // })

    // Будет вызываться ТОЛЬКО при изменении typeData
    useEffect(() => {
        console.log("Рендер при изменении typeData");
        setHeader("Долгая загрузка данных " + typeData)
        const timeout = setTimeout(() => {
            new Promise((resolve, reject) => { // Задержка запроса для примера "долгого запроса"
                setTimeout(() => {
                    // Запрашиваем данные в зависимости от типа
                    fetch('https://dummyjson.com/' + typeData + '')
                        .then(response => response.json())
                        .then(json => {
                            resolve(json);
                        })
                }, 1500);
            }).then((json) => {
                setHeader(typeData + " загружены")
                setData(json)
                console.log(json)
            });
        }, 800)
        return () => {
            clearTimeout(timeout);
        }
    }, [typeData])


    useEffect(() => {
        console.log("Произошел первый рендер компонента");
        console.log("Устанавливаем count = 10");
        setCount(10);
    }, [/* Параметры */])

    return (
        <div>
            <h1>{header}</h1>
            <h2>Тип данных: {typeData}</h2>
            <button onClick={() => setTypeData("posts")}>Posts</button>
            <button onClick={() => setTypeData("users")}>Users</button>
            <button onClick={() => setTypeData("comments")}>Comments</button>

            <button style={{ height: 30, marginLeft: 20 }} onClick={() => setCount(count + 1)}>Количество {count}</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};


export default UseEffectHook;