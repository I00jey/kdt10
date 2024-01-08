import { useReducer } from "react";

// 초기 상태값
const initState = { value: 0 };
// reducer 함수는 기본적으로 첫번째 인자로 현태 상태 (값)을 불러옴
const reducer = (prevState, action) => {
    // 현재 state와 action값을 전달받아서 새로운 state 값을 반환
    switch (action.type) {
        case "INCREMENT":
            return { value: prevState.value + 1 };
        case "DECREMENT":
            return { value: prevState.value - 1 };
        case "RESET":
            return { value: initState.value };
        default:
            return { value: prevState.value };
    }
};
function UseReducerEx() {
    // reducer : state를 업데이트하는 함수
    // dispatch : 액션(state가 어떻게 변경되어야 하는 지에 대한 힌트)을 발생시키는 함수
    // state : 현재 상태
    // useReducer는 [state, dispatch]를 리턴함
    const [state, dispatch] = useReducer(reducer, initState);

    const increment = () => {
        dispatch({ type: "INCREMENT" });
    };
    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };
    const reset = () => {
        dispatch({ type: "RESET" });
    };
    return (
        <>
            <h1>useReducer Ex</h1>
            <h2>{state.value}</h2>
            {/* Objects are not valid as a React child (found: object with keys {value}). If you meant to render a collection of children, use an array instead. */}
            {/* 객체는 React 자식 요소로 들어갈 수 없음, 객체를 따로 표현하는 방법이 아니기 때문에 */}
            {/* <h3>{state}</h3> */}
            <button onClick={increment}>Plus</button>
            <button onClick={decrement}>Minus</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default UseReducerEx;
