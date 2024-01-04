import Prac1 from './Prac1';
import Prac2 from './Prac2';

function App() {
    return (
        <div className="App">
            <Prac1 food="콩나물밥" />
            <Prac1 />
            <Prac1>부모에서 작성한 내용</Prac1>
            <br />
            <hr />
            <br />
            <Prac2
                title="마흔에 읽는 쇼펜하우어"
                author="강용수"
                price="15,300원"
                type="서양철학"
            />
        </div>
    );
}

export default App;
