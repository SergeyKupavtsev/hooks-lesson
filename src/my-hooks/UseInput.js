import React, { useState } from 'react';

const UseInput = (initialValue, onlyNumber) => {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        if (onlyNumber) {
            if (!isNaN(Number(event.target.value)) || event.target.value === "") {
                setValue(event.target.value)
            }

        } else {
            setValue(event.target.value)
        }
    }

    const clear = () => setValue('')

    return {
        state: { value, onChange },
        value,
        clear
    }
};

export default UseInput;