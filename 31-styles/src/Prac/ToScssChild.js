function ToScssChild({ postDatas }) {
    return (
        <div className="NumList">
            {postDatas.map((newsdata) => {
                return (
                    <div
                        className={`listBox listBox${newsdata.id}`}
                        key={newsdata.id}
                    >
                        <p>
                            <span className="textNo">NO. {newsdata.id}</span> -{' '}
                            {newsdata.title}
                        </p>
                        <br />
                        <p className="newText">{newsdata.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ToScssChild;
