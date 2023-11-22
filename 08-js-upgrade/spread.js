// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할
// -> 객체들의 값을 펼쳐준다!

// 배열에서 spread
const a = [1,2,3];
const b = [4,5];
const spread = [...a, ...b ] //[ 1, 2, 3, 4, 5 ]
console.log(spread);

// 문자열에서 spread
const str = 'Hello';
console.log([...str]);
console.log([...'Hello']);
console.log([...'Hello']);
console.log(str.split(''));

// 객체에서 spread
const chip = {
    base : 'chip',
    company : 'lotte'
}

const potatoChip = {
    ...chip,
    flavor : 'onion'
}
// 원래 있는 키값에 다른 값을 바꿀 수 있음
const sweetpotatoChip = {
    ...potatoChip,
    flavor: 'sweet onion'
}

console.log('chip : ',chip);
console.log('potatoChip : ', potatoChip);
console.log('sweetpotatoChip : ', sweetpotatoChip);

// spread 실습 : 연산자 사용하기
const word1 = 'abc';
const word2 = 'xyz';
const word = [...word1, ...word2];
console.log(word);