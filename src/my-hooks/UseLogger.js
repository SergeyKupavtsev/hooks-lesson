import React, { useEffect } from 'react';

const UseLogger = (title, value) => {

    useEffect(() => {
        console.log(`${title} = ${value}`);
    }, [value])

};

export default UseLogger;