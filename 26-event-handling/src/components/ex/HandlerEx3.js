import React, { useState } from "react";

function HandlerEx3() {
    const [disPlay, setDisplay] = useState({
        text: "사라져라",
        style: { display: "block" },
    });
    const changeSet = () => {
        if (disPlay.text === "사라져라") {
            setDisplay({ style: { display: "none" }, text: "보여라" });
        } else {
            setDisplay({ style: { disPlay: "block" }, text: "사라져라" });
        }
    };
    return (
        <div>
            <button onClick={changeSet}>{disPlay.text}</button>
            <h1 style={disPlay.style}>안녕하세요</h1>
        </div>
    );
}

export default HandlerEx3;
