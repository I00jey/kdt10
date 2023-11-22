// 구조 분해 할당

// 1. 배열 구조분해할당
// - 순서가 중요함
const arr1 =[1,2,3,4,5];
const arr2 = ['a','b','c'];
const [one,two,three, four, five] = arr1; 
console.log(one,two,three, four, five); //1 2 3 4 5

const [x,y,z,alpha] = arr2;
console.log(x,y,z,alpha);   //a b c undefined
const list = ['apple', 'orange'];
const [f1,f2,f3 = 'melon'] = list;  //기본값 할당(설정)
console.log(f1,f2,f3);

let num1 = 1, num2 = 3;
console.log('swap 전 >', num1,num2);
[num1,num2] = [num2, num1]; //[num1,num2] = [3, 1];
console.log('swap 전 >', num1,num2);


// 2. 객체 구조분해 할당
// - 키값과 변수명이 일치
const obj = {
    title :'독전2',
    star : 1,
    content : '제발 보지마라...'
}
// 구조분해 x
console.log(obj.title,obj.star, obj.content);
// 구조분해 o
// 순서 상관 x, 키값이 일치하여야 함
// const {content, star, title} = obj;
// key가 존재하지 않는 경우 대비하여 default 값 할당
const {content, star, title, price=1000} = obj;
console.log(content,star,title,price);

// 콜론(:)을 이용해서 새 변수명으로 바꿔서 저장 가능
const {content : c1, star:s1, title:t1} = obj;
console.log(c1,s1,t1);

// ---------------------예시--------------------
// 전달받는 데이터
const info = {
    name : 'fullstack',
    time : '09~14',
    content : '여러분은 배가 고프시죠...'
}

function getInfo(lecture) {
    // 구조 분해 할당 사용하여 값 추출
    const {name, time, content} = lecture;
    // 출력 문장 생성
    let send = `강의명 ${name}, 수업시간 ${time}, ${content} 네에...`;
    // 출력 문장 리턴
    return send;
}

const result = getInfo(info);
console.log(result);

// ----------------------코딩 꿀팁
// 단축평가
// &&, ||
// A && B : 두 개의 피연산자 모두 true면 true를 반환
// A || B : 두 개의 피연산자 중에서 하나면 true여도 true 반환

console.log(true && true); //true
console.log(true && false);//false
console.log(true || false);//true
console.log(false || false);//false

// %% 논리곱
const v1 = 5;
const v2 = 7;
// 앞 조건이 true면 && 뒤에 값 변수에 저장
const result1 = v1 > v2 && 'v1이 큼' 
console.log(result1);//false
const result2 = v1 < v2 && 'v2이 큼' 
console.log(result2);//v2가 큼

// || 논리곱
const result3 = v1 || 1000; // 앞에 값이 true에서 뒤에는 검사 X
console.log(result3); //5

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름 X'); //홍길동
console.log(nameEx2 || '이름 X');// 이름 X

