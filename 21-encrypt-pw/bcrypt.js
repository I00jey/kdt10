// bcrypt
// : 비밀번호 암호화하는 알고리즘 중 하나
// : 주로 강력한 보안 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수

const bcrypt = require("bcrypt");
// 원본 비번
const orinimalPW = "1234";
// 솔트 라운드 수를 정의
const saltRounds = 10;

// 1. 비밀번호 해싱 함수
function hashPW(password) {
    // salt를 자동으로 생성
    return bcrypt.hashSync(password, saltRounds);
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는 지 확인하는 함수
// 같은 지, 다른 지만 알려줌
function comparePW(password, hashedPW) {
    return bcrypt.compareSync(password, hashedPW);
}

// 사용 예제
// 원본 비번을 해싱한 결과
const hashedPW = hashPW(orinimalPW);
console.log("hashedPW >", hashedPW);

// 원본 비번이랑 해시된 비번이 일치하는지 확인
const isMatch = comparePW(orinimalPW, hashedPW);
// 같다면 true, 다르면 false
console.log(`originalPW === hashedPW :`, isMatch); // true

const isMatch2 = comparePW("hello", hashedPW);
// 같다면 true, 다르면 false
console.log(`originalPW === hashedPW2 :`, isMatch2); //false
