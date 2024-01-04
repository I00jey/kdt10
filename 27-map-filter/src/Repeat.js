import React from 'react';

function Repeat() {
    // currentValue : list를 순서대로 돌면서 나오는 값
    // index : 방금 나온 값의 인덱스
    // let mapList = list.map((currentValue, index) => {
    //     //map 함수는 return이 필수
    //     return index + currentValue;
    // })

    // 오브젝트로 이루어진 배열
    let list = [{ name: 'suji' }, { name: 'bob' }, { name: 'dik' }];

    let fruits = [{ fruit: 'banana' }, { fruit: 'apple' }, { fruit: 'melon' }];
    let filterResult = fruits.filter((fruit) => {
        // fruits에서 banana 요소를 제외
        return fruit.fruit !== 'banana';
    });
    console.log(filterResult);
    let filterResult2 = fruits.filter((fruit) => {
        // fruits에서 과일명 중 'a'를 포함한 요소
        return fruit.fruit.includes('a');
    });
    console.log(filterResult2);
    return (
        <>
            {/* 오브젝트의 점 접근법으로 값 전달 */}
            {/* 배열의 개수만큼 컴포넌트 생성 */}
            {list.map((value, index) => {
                return (
                    // map( ) 함수를 이용해 컴포넌트를 생성할 때 key 사용 권장
                    // 업데이트 여부를 비교하는데 key를 사용하기 때문
                    <div key={index}>
                        {index}번 님의 이름은 {value.name}
                    </div>
                );
            })}
            {/* filter 함수를 이용해서 배열에서 '바나나'를 제외 */}
            {}
        </>
    );
}
export default Repeat;
