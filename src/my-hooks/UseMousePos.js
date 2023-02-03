import React, { useEffect, useState } from 'react';

const UseMousePos = () => {
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    const handleMove = (event) => {
        setPos({
            x: event.pageX,
            y: event.pageY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMove);

        return () => {
            window.removeEventListener('mousemove', handleMove);
        }
    }, [])


    return pos;
};

export default UseMousePos;