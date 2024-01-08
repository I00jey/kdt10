import { useEffect, useState } from 'react';
import Prac2Child from './Prac2Child';

function Prac2() {
    const [postDatas, setPostDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const promises = [];
            try {
                for (let i = 1; i < 11; i++) {
                    const response = await fetch(
                        `https://jsonplaceholder.typicode.com/posts/${i}`
                    );
                    const json = await response.json();
                    promises.push(json);
                }
                // 모든 데이터를 받은 후에 2초 뒤에 state 업데이트
                setTimeout(() => {
                    setPostDatas(promises);
                }, 2000);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1>postList</h1>
            {postDatas.length === 0 ? (
                <h2>Loading...</h2>
            ) : (
                <Prac2Child postDatas={postDatas} />
            )}
        </>
    );
}

export default Prac2;
