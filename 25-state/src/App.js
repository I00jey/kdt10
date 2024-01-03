import './App.css';
import Counter from './Counter';
import CounterFunc from './CounterFunc';
import SayFunction from './SayFunction';
import Prac1Class from './Prac1Class';
import Prac2Func from './Prac2Func';
function App() {
    return (
        <div className="App">
            <Counter></Counter>
            <hr />
            <SayFunction></SayFunction>
            <hr />
            <CounterFunc />
            <hr />
            {/* 실습 */}
            <Prac1Class />
            <hr />
            <Prac2Func />
        </div>
    );
}

export default App;
