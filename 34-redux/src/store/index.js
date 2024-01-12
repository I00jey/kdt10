import { combineReducers } from "redux";
import isVisibleReducer from "./isVisiblePrac";
import counterReducer from "./counterReducer";
import reducerPrac from "./reducerPrac";

// 여러 개의 reducer 묶기
const rootReducer = combineReducers({
    counter: counterReducer,
    isvisible: isVisibleReducer,
    reducePrac: reducerPrac,
});

export default rootReducer;
