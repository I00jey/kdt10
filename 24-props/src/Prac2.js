import './Prac2.css';

function Prac2(props) {
    const { title, author, price, type } = props;
    return (
        <div className="prac2_div">
            <h1>이번주 베스트셀러</h1>
            <img
                src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791192300818.jpg"
                alt=""
            />
            <h2>{title}</h2>
            <p>저자 : {author}</p>
            <p>판매가 : {price}</p>
            <p>구분 : {type}</p>
        </div>
    );
}

export default Prac2;
