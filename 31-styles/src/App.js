import CssModuleComponent from './CssModuleComponent';
import MovingCircle from './Prac/MovingCircle';
import Prac1 from './Prac/Prac1';
import ToScss from './Prac/ToScss';
import SassComponent from './SassComponent';
import './styles/App.css';
import StyledComponent from './StyledComponent';

function App() {
    return (
        <div className="App">
            <h1>React styling</h1>
            <h2>CSS Module</h2>
            <CssModuleComponent />
            <hr />
            <h2>SASS</h2>
            <SassComponent />
            <hr />
            <h2>warm Prac</h2>
            <Prac1 />
            <hr />
            <h2>moving circle Prac</h2>
            <MovingCircle />
            <hr />
            <ToScss />
            <hr />
            <h2>StyledComponent</h2>
            <StyledComponent />
        </div>
    );
}

export default App;
