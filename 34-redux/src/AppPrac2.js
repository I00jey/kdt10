import { useDispatch, useSelector } from "react-redux";
import "./styles/Box.css";

function App() {
    const boolean = useSelector((state) => state.isvisible.boolean);
    return (
        <>
            <h1>React Redux Ex</h1>
            <h2>isVisible 값은 "{boolean}"이다.</h2>
            <Box1 />
        </>
    );
}

function Box1() {
    return (
        <div className="Box">
            <h2>Box1</h2>
            <Box2 />
        </div>
    );
}
function Box2() {
    return (
        <div className="Box">
            <h2>Box2</h2>
            <Box3 />
        </div>
    );
}
function Box3() {
    return (
        <div className="Box">
            <h2>Box3</h2>
            <Box4 />
        </div>
    );
}
function Box4() {
    // state.boolean : store에 저장된 값 중 boolean이라는 키를 가진 값
    const boolean = useSelector((state) => state.isvisible.boolean);
    // 액션을 발생시키는 함수 disPatch()
    const dispatch = useDispatch();
    return (
        <div>
            <h2>isVisible 값은 "{boolean}"이다.</h2>
            <button
                onClick={() => {
                    // type : action의 type | 액션을 구분하기 위한 type 값
                    dispatch({ type: `isvisible/${boolean}` });
                }}
            >
                CHANGE
            </button>
        </div>
    );
}

export default App;
