function ToScssChild({ postDatas }) {
    const boxStyle = {
        color: 'lightblue',
    };
    return (
        <>
            {postDatas.map((newsdata) => {
                return (
                    <div key={newsdata.id}>
                        <p>
                            <span style={boxStyle}>NO. {newsdata.id}</span> -
                            {newsdata.title}
                        </p>
                        <p>{newsdata.body}</p>
                    </div>
                );
            })}
        </>
    );
}

export default ToScssChild;
