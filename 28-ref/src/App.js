import BoardPage from './Prac/BoardPage';
import RefClass1 from './RefClass1';
import RefClass2 from './RefClass2';
import RefFunc1 from './RefFunc1';
import RefFunc2 from './RefFunc2';

function App() {
    return (
        <div className="App">
            <RefClass1 />
            <hr />
            <RefClass2 />
            <hr />
            <RefFunc1 />
            <hr />
            <RefFunc2 />
            <hr />
            {/* 실습 */}
            <BoardPage />
        </div>
    );
}

export default App;
