import './App.css';

function Prac4() {
    const title = 'Good Job';
    return (
        <div className="prac4_div">
            <div className="hello">{title}</div>
            <div className="input">
                <div>
                    아이디: <input type="text" />
                </div>
                <br />
                <div>
                    비밀번호: <input type="text" />
                </div>

                <br />
            </div>
        </div>
    );
}

export default Prac4;
