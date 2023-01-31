import React, { useState } from 'react';


function computeInitialState() {
    console.log("Считаем что то");
    return Math.trunc(Math.random() * 5);
}
const UseStateHook = () => {
    // НЕПРАВИЛЬНО, computeInitialState будет вызываться при каждом setCount
    // const [count, setCount] = useState(computeInitialState());
    // Правильно, computeInitialState будет вызван только при первом рендеринге
    const [count, setCount] = useState(() => computeInitialState());

    const [user, setUser] = useState({
        name: "Толик",
        age: 20
    })

    const updateName = () => {
        setUser({ ...user, name: "Петя" })

        setUser(prevState => {
            return {
                ...prevState,
                name: "Петя"
            }
        })
    }

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Толик",
            age: 20
        },
        {
            id: 2,
            name: "Петя",
            age: 22
        },
        {
            id: 3,
            name: "Костя",
            age: 33
        },
    ])
    // Удалить элемент из массива
    const deleteTolik = () => {
        setUsers(users.filter(user => user.name !== "Толик"));
    }
    // Добавить элемент в массив
    const addFedia = () => {
        setUsers([...users, { id: 4, name: "Федя", age: 23 }]);
    }
    // Обновить элемент из массива
    const updateById = () => {
        setUsers(users.map(user => {
            if (user.id === 3) {
                return {
                    ...user,
                    name: "Виталя"
                }
            } else {
                return user;
            }
        }));
    }

    const add = () => {
        // Правильное применение
        setCount((prevState) => {
            return prevState + 1;
        })
        setCount((prevState) => {
            return prevState + 1;
        })
    }

    const remove = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Счетчик {count}</h2>
            <button onClick={add}>Добавить</button>
            <button onClick={remove}>Убрать</button>

            <h2>{user.name}</h2>
            <button onClick={updateName}>Обновить имя</button>

            {users.map(user => {
                return <h3 key={user.id}>
                    {user.name}
                </h3>
            })}
            <button onClick={deleteTolik}>Удалить Толика</button>
            <button onClick={updateById}>Обновить 3 ид</button>
            <button onClick={addFedia}>Добавить Федю</button>
        </div>
    );
};

export default UseStateHook;