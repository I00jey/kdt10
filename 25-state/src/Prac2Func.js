import React, { useState } from 'react';

function Prac2Func() {
    const [number, setNumber] = useState(0);
    const increase = () => {
        setNumber(number + 1);
    };
    const decrease = () => {
        setNumber(number - 2);
    };
    return (
        <div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <h1>{number}</h1>
        </div>
    );
}

export default Prac2Func;
