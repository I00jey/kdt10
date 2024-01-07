import React, { useRef, useState } from 'react';

function BoardPage() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [outputData, setOutputData] = useState([]);
    const sendData = () => {
        if (!refName.current.value) {
            refName.current.focus();
            return;
        } else if (!refTitle.current.value) {
            refTitle.current.focus();
            return;
        }
        const newData = outputData.concat({
            id: `${outputData.length + 1}`,
            title: title,
            name: name,
        });
        setOutputData(newData);
    };
    const refName = useRef();
    const refTitle = useRef();
    return (
        <div>
            <div>
                <fieldset>
                    <form>
                        작성자 :
                        <input
                            type="text"
                            placeholder="작성자"
                            ref={refName}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        제목 :
                        <input
                            type="text"
                            ref={refTitle}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    sendData();
                                }
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
            <div>
                <table
                    border={2}
                    cellSpacing={3}
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
        </div>
    );
}

export default BoardPage;
