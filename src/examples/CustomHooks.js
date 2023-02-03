import React from 'react';
import UseInput from '../my-hooks/UseInput';
import UseLogger from '../my-hooks/UseLogger';
import UseMousePos from '../my-hooks/UseMousePos';

const CustomHooks = () => {

    const input = UseInput('')
    const numberInput = UseInput('', true)

    UseLogger("Number input", numberInput.value);

    const { x: posX, y: posY } = UseMousePos();

    return (
        <div>
            <p>Позиция мыши</p>
            <p>X: {posX}</p>
            <p>Y: {posY}</p>
            <h2>Свой CustomInput</h2>
            <input type="text" {...input.state} />
            <button onClick={input.clear}>Очистка</button>
            <br />
            <p>Вы ввели</p>
            <p>{input.value}</p>
            <h2>Свой CustomInput Только цифры</h2>
            <input type="text" {...numberInput.state} />
            <button onClick={numberInput.clear}>Очистка</button>
            <br />
            <p>Вы ввели</p>
            <p>{numberInput.value}</p>
        </div>
    );
};

export default CustomHooks;