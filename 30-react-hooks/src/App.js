import Form from "./Form";
import "./App.css";
import Faq from "./Faq";
import Reducer from "./Reducer";
import UseReducerEx from "./UseReducerEx";
import ReactFormEx from "./ReactFormEx";

function App() {
    return (
        <div className="App">
            <Reducer />
            <hr />
            <UseReducerEx />
            <hr />
            <Faq />
            <hr />
            <Form />
            <hr />
            <ReactFormEx />
        </div>
    );
}

export default App;
