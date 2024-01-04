function BoardPage() {
    const sendData = () => {};
    const searchData = () => {};
    return (
        <div>
            <div>
                <fieldset>
                    <form>
                        작성자 : <input type="text" placeholder="작성자" /> 제목
                        : <input type="text" />
                        <button
                            style={{ marginLeft: "20px" }}
                            onClick={sendData}
                        >
                            작성
                        </button>
                    </form>
                </fieldset>
            </div>
            <div style={{ margin: "30px" }}>
                <select style={{ marginRight: "20px" }}>
                    <option value="writer">작성자</option>
                    <option value="num">번호</option>
                    <option value="title">제목</option>
                </select>

                <input
                    type="text"
                    placeholder="검색어"
                    style={{ marginRight: "20px" }}
                />
                <button style={{ marginRight: "20px" }} onClick={searchData}>
                    검색
                </button>
            </div>
            <div>
                <table
                    border={2}
                    cellSpacing={0}
                    cellPadding={20}
                    style={{ marginTop: "30px" }}
                >
                    <tr>
                        <th>번호</th>
                        <th style={{ width: "140px" }}>제목</th>
                        <th style={{ width: "200px" }}>작성자</th>
                    </tr>
                    {}
                    <tr></tr>
                </table>
            </div>
        </div>
    );
}

export default BoardPage;
