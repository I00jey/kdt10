// 구조분해 할당 : 구조를 분해해서 변수에 할당

// 1. 객체 구조분해
const cookie = {
    choco: '초코',
    vanilla: '바닐라',
    mint: '민트'
}

// 원래 접근법
// console.log(cookie.choco);

const { mint, choco, vanilla } = cookie;
/*
    const {mint, choco, vanilla} = {
        choco: '초코',
        vanilla : '바닐라',
        mint : '민트'
    }
 */
console.log(choco);
console.log(vanilla);
console.log(mint);

// 2. 배열 구조분해
const arr = ['first', 'second'];
// 배열은 인덱스로 구분 (객체와 달리 순서가 중요)
const [one, two] = arr;
// const [one, two] = ['first', 'second'];
// const one = arr[0]
// const two = arr[1]
console.log(one, two);

