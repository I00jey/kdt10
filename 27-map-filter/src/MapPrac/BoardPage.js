import React, { useState } from 'react';

function BoardPage() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [searchKey, setSearchKey] = useState('name');
    const [searchText, setSearchText] = useState('');
    const [searchData, setSearchData] = useState([]);
    const [outputData, setOutputData] = useState([]);
    const sendData = () => {
        const newData = outputData.concat({
            id: `${outputData.length + 1}`,
            title: title,
            name: name,
        });
        setOutputData(newData);
    };
    const dataSearch = () => {
        if (!searchText) {
            return;
        }
        console.log(searchKey, searchText);
        const searchdata = outputData.filter((outputdata) => {
            return outputdata[searchKey].includes(searchText);
        });
        console.log('searchdata', searchdata);
        setSearchData(searchdata);
    };
    const getSelectKey = (e) => {
        setSearchKey(e.target.value);
    };
    const getSelectValue = (e) => {
        setSearchText(e.target.value);
    };
    const dataAll = () => {
        setSearchData(outputData);
    };
    return (
        <div>
            <div>
                <fieldset>
                    <form>
                        작성자 :
                        <input
                            type="text"
                            placeholder="작성자"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        제목 :
                        <input
                            type="text"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <button
                            type="button"
                            style={{ marginLeft: '20px' }}
                            onClick={sendData}
                        >
                            작성
                        </button>
                    </form>
                </fieldset>
            </div>
            <div style={{ margin: '30px' }}>
                <select style={{ marginRight: '20px' }} onChange={getSelectKey}>
                    <option value="name">작성자</option>
                    <option value="id">번호</option>
                    <option value="title">제목</option>
                </select>

                <input
                    onChange={getSelectValue}
                    type="text"
                    placeholder="검색어"
                    style={{ marginRight: '20px' }}
                />
                <button
                    type="button"
                    style={{ marginRight: '20px' }}
                    onClick={dataSearch}
                >
                    검색
                </button>
                <button
                    type="button"
                    style={{ marginRight: '20px' }}
                    onClick={dataAll}
                >
                    전체
                </button>
            </div>
            <div>
                <table
                    border={2}
                    cellSpacing={0}
                    cellPadding={20}
                    style={{ marginTop: '30px' }}
                >
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th style={{ width: '500px' }}>제목</th>
                            <th style={{ width: '100px' }}>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {outputData.map((output) => {
                            return (
                                <tr key={output.id}>
                                    <td>{output.id}</td>
                                    <td>{output.title}</td>
                                    <td>{output.name}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {searchData.length <= 0 ? (
                <div>
                    <h3>검색 결과가 없습니다.</h3>
                </div>
            ) : (
                <div>
                    <h3>검색 결과</h3>
                    <table
                        border={2}
                        cellSpacing={0}
                        cellPadding={20}
                        style={{ marginTop: '30px' }}
                    >
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th style={{ width: '500px' }}>제목</th>
                                <th style={{ width: '100px' }}>작성자</th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchData.map((output) => {
                                return (
                                    <tr key={output.id}>
                                        <td>{output.id}</td>
                                        <td>{output.title}</td>
                                        <td>{output.name}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default BoardPage;
