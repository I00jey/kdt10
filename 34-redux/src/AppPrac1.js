import { useDispatch, useSelector } from "react-redux";
import { mul, div } from "./store/reducerPrac";
import "./styles/Box.css";

function App() {
    const number = useSelector((state) => state.number);
    return (
        <div className="Box">
            <h2>Redux 실습</h2>
            <h3>{number}</h3>
            <Box1 />
        </div>
    );
}

function Box1() {
    return (
        <div className="Box">
            <h2>박스 1</h2>
            <Box2 />
        </div>
    );
}
function Box2() {
    return (
        <div className="Box">
            <h2>박스 2</h2>
            <Box3 />
        </div>
    );
}
function Box3() {
    return (
        <div className="Box">
            <h2>박스 3</h2>
            <Box4 />
        </div>
    );
}
function Box4() {
    const number = useSelector((state) => state.number);
    const dispatch = useDispatch();
    return (
        <div className="Box">
            <h2>박스 4</h2>
            <h3>{number}</h3>
            <button onClick={() => dispatch(mul())}>2 곱하기</button>
            <button onClick={() => dispatch(div())}>2 나누기</button>
            <button onClick={() => dispatch({ type: "reset" })}>리셋</button>
        </div>
    );
}

export default App;
