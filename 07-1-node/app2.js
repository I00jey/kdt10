//math2 모듈을 불러와서 사용

const math2 = require('./math2');
console.log(math2.add(3,4));
console.log(math2.PI);
console.log(math2.E);

// 구조분해 할당은 내보낸 값과 동일한 이름으로
const {add, P, E} = require('./math2');
console.log(add(4,5));
console.log(P); //undefined
console.log(E);