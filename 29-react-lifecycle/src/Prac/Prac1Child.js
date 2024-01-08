function Prac1Child({ state }) {
    const boxStyle = {
        color: 'lightblue',
    };
    return (
        <>
            {state.map((newsdata) => {
                return (
                    <div>
                        <p>
                            <span style={boxStyle}>NO. {newsdata.id}</span> -{' '}
                            {newsdata.title}
                        </p>
                        <p>{newsdata.body}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Prac1Child;
