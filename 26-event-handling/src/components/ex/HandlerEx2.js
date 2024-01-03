import React, { useState } from "react";

function ChangeTextColor() {
    const [textColor, setTextColor] = useState({
        text: "검정색",
        style: { color: "#fffff" },
    });
    const colorRed = () => {
        setTextColor({ text: "빨간색", style: { color: "#ff0000" } });
    };
    const colorBlue = () => {
        setTextColor({ text: "파란색", style: { color: "#0000ff" } });
    };
    return (
        <div>
            <h1 style={textColor.style}>{textColor.text}글씨</h1>
            <button onClick={colorRed}>빨간색</button>
            <button onClick={colorBlue}>파란색</button>
        </div>
    );
}

export default ChangeTextColor;
