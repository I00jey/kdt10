import React, { useState } from "react";

function NameEmail() {
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [outputData, setOutputData] = useState([
        { id: 1, data: "코디 : codi@example.com" },
        { id: 2, data: "시루 : ricecake@example.com" },
    ]);
    const addData = () => {
        const newData = outputData.concat({
            id: outputData.length + 1,
            data: inputName + " : " + inputEmail,
        });
        setOutputData(newData);
        setInputEmail("");
        setInputName("");
    };
    const deleteData = (index) => {
        const deletedDatas = outputData.filter((value, ind) => ind !== index);
        setOutputData(deletedDatas);
    };
    return (
        <>
            <input
                type="text"
                placeholder="이름"
                onChange={(e) => {
                    setInputName(e.target.value);
                }}
            />
            <input
                type="text"
                placeholder="이메일"
                onChange={(e) => {
                    setInputEmail(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addData();
                    }
                }}
            />
            <button onClick={addData}>등록</button>
            <ul>
                {outputData.map((value, index) => (
                    <li
                        style={{ listStyle: "none" }}
                        onDoubleClick={() => {
                            deleteData(index);
                        }}
                        key={value.id}
                    >
                        {value.data}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default NameEmail;
