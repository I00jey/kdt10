import { useDispatch, useSelector } from "react-redux";
import { plus, minus } from "../store/counterReducer";

function Box4() {
    const number = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    return (
        <div className="Box">
            <h2>Box4 : {number}</h2>
            <button onClick={() => dispatch(plus())}>+ plus</button>
            <button onClick={() => dispatch(minus())}>- minus</button>
        </div>
    );
}

export default Box4;
