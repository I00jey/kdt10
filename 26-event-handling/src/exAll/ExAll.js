import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import Result from "./Result";

function ExAll() {
    const [data, setData] = useState({
        fruit: "banana",
        background: "black",
        color: "white",
        content: "text",
    });
    return (
        <>
            <Select setData={setData} />
            <div>
                <Input setData={setData}></Input>
            </div>
            <div>
                <Result data={data} />
            </div>
        </>
    );
}

export default ExAll;
