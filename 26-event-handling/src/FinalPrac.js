import React, { useState } from "react";
import FinalPracChild from "./FinalPracChild";
import straw from "../src/straw.jpeg";
import peach from "../src/peach.jpeg";
import apple from "../src/apple.jpeg";
import banana from "../src/banana.jpeg";

function FinalPrac() {
    // 상태관리
    const [selectValue, setSelectValue] = useState({
        fruit: banana,
        backcolor: "black",
        fontcolor: "white",
    });

    const getFruitValue = (e) => {
        setSelectValue((prevValue) => ({
            ...prevValue,
            fruit: e.target.value,
        }));
    };
    const getBackColor = (e) => {
        setSelectValue((prevValue) => ({
            ...prevValue,
            backcolor: e.target.value,
        }));
    };
    const getFontColor = (e) => {
        setSelectValue((prevValue) => ({
            ...prevValue,
            fontcolor: e.target.value,
        }));
    };
    return (
        <div className="App">
            {/* 실습 */}

            <span>과일 : </span>
            <select
                name="fruit"
                id="fruit"
                value={selectValue.fruit}
                onChange={getFruitValue}
            >
                <option value={banana}>바나나</option>
                <option value={apple}>사과</option>
                <option value={peach}>복숭아</option>
                <option value={straw}>딸기</option>
            </select>
            <span>배경색 : </span>
            <select
                name="backcolor"
                id="backcolor"
                onChange={getBackColor}
                value={selectValue.backcolor}
            >
                <option value="#000000">black</option>
                <option value="#FF99CC">pink</option>
                <option value="#FF0033">red</option>
                <option value="#FFFF00">yellow</option>
                <option value="#0000CC">blue</option>
                <option value="#ffffff">white</option>
            </select>
            <span>글자색 : </span>
            <select
                name="fontcolor"
                id="fontcolor"
                onChange={getFontColor}
                value={selectValue.fontcolor}
            >
                <option value="#000000">black</option>
                <option value="#FF99CC">pink</option>
                <option value="#FF0033">red</option>
                <option value="#FFFF00">yellow</option>
                <option value="#0000CC">blue</option>
                <option value="#ffffff">white</option>
            </select>
            <FinalPracChild selectValue={selectValue} />
        </div>
    );
}

export default FinalPrac;
