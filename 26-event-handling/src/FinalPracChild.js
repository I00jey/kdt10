import React, { useState } from "react";

function FinalPracChild({ selectValue }) {
    const [text, setText] = useState("안녕");
    const { fruit, backcolor, fontcolor } = selectValue;
    console.log(fruit, backcolor, fontcolor);
    const changeText = (e) => {
        setText(e.target.value);
    };
    return (
        // 빈태그를 활용해서 전체를 묶어도 됌
        <>
            <br />
            <span>내용 : </span>
            <input
                type="text"
                width={20}
                placeholder="텍스트를 입력하세요"
                onChange={changeText}
            />
            <br />
            <img src={fruit} alt="과일" />
            <br />
            <div
                style={{
                    color: fontcolor,
                    backgroundColor: backcolor,
                    height: 40,
                    fontSize: 20,
                }}
            >
                {text}
            </div>
        </>
    );
}

export default FinalPracChild;
