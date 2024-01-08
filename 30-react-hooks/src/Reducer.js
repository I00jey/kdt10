import { useReducer } from "react";
function Reducer() {
    // Reducer
    // : 현재 state와 action 값을 전달받아 새로운 state 반환
    const reducer = (prevNumber, action) => {
        switch (action) {
            case "increment":
                return prevNumber + 1;
            case "decrement":
                return prevNumber - 1;
            case "reset":
                return 0;
            default:
                return prevNumber;
        }
    };

    // useReducer 정의
    // number : 현재 상태
    // dispatch : 액션을 발생시키는 함수
    // reducer : state 업데이트하는 함수
    // initialState : 상태의 초기값 (ex. 0, 'hi' )
    const [number, dispatch] = useReducer(reducer, 0);

    return (
        // dispatch 함수로 action 값 전달
        // : dispatch는 action값을 받아 state와 함께 전달
        <div>
            <h1>useReducer hooks test</h1>
            <h2>{number}</h2>
            <button onClick={() => dispatch("increment")}>Plus</button>
            <button onClick={() => dispatch("decrement")}>Minus</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    );
}

export default Reducer;
