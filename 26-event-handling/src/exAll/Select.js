function Select({ setData }) {
    return (
        <>
            과일:
            <select
                onChange={(e) => {
                    // data state 중 fruit 값 변경
                    // console.log(e.target.value);
                    setData((data) => {
                        // spread 연산자
                        // 이전의 data state (객체 형태)
                        // ...data : 이전 값 그대로
                        // fruit 값만 변경이 일어나서 fruit만 변경함
                        return { ...data, fruit: e.target.value };
                    });
                }}
            >
                <option value="banana">banana</option>
                <option value="apple">apple</option>
                <option value="peach">peach</option>
                <option value="straw">straw</option>
            </select>
            배경색 :
            <select
                onChange={(e) => {
                    setData((data) => {
                        return { ...data, background: e.target.value };
                    });
                }}
            >
                <option value="black">black</option>
                <option value="pink">pink</option>
                <option value="red">red</option>
                <option value="yellow">yellow</option>
                <option value="blue">blue</option>
                <option value="white">white</option>
            </select>
            글자색 :
            <select
                onChange={(e) => {
                    setData((data) => {
                        return { ...data, color: e.target.value };
                    });
                }}
            >
                <option value="#000000">black</option>
                <option value="#FF99CC">pink</option>
                <option value="#FF0033">red</option>
                <option value="#FFFF00">yellow</option>
                <option value="#0000CC">blue</option>
                <option value="#ffffff">white</option>
            </select>
        </>
    );
}

export default Select;
