import React from "react";
import ReactDOM from "react-dom/client";
import App from "./AppPrac2";
// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";
import { composeWithDevTools } from "redux-devtools-extension";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(isVisibleReducer);
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
root.render(
    <React.StrictMode>
        {/* store에 저장된 state를 사용할 컴포넌트들을 묶어서 바인드하는 역할 */}
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
