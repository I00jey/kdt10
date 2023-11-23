
// promise 프로미스 객체
/** 
 * 비동기 함수를 동기처리하기 위해 만든 객체
 * 미래에 성공/실패에 대한 결과 값을 '약속'한다는 의미
 * 성공, 실패를 분리해서 반환
 * 성공에 대한 결과는 then이라는 메서드
 * 실패에 대한 결과는 catch라는 메서드로 처리
 * resolved : 성공
 * rejected : 실패
*/

// // 1. 프로미스를 생성하는 코드
// function promise1(flag) {
//     // 프로미스 객체를 생성하여 반환
//     return new Promise(function (resolve, reject) {
//         if (flag) {
//             resolve(`현재 프로미스의 상태는 fulfilled(이행), then 메소드로 연결! flag : ${flag}`);
//         } else {
//             reject(`현재 프로미스의 상태는 rejected(거절), catch 메소드로 연결! flag : ${flag}`)
//         }
//     })
// }
// // 2. 프로미스를 사용하는 코드
// // promise1(조건);
// // then() catch() 메서드 내부에는 함수가 들어가야함
// promise1(true).then((result) => {
//     console.log('result : ', result);
// }).catch((err) => {
//     console.log('error : ', err);
// })
// promise1(false).then((result) => {
//     console.log('result : ', result);
// }).catch((err) => {
//     console.log('error : ', err);
// })


// ---------------------프로미스 예제
// index.js에서 '콜백함수'를 이용해서 동기처리한 코드를 
// 'promise'를 이용해 동기처리

// function goMart() {
//     console.log('마트에 와서 어떤 음료를 살지 고민중..');
// }

// function pickDrink() {
//     // 서버에서 실행되는 것이 아니므로 프로미스 객체가 없어서 직접 만들어서 사용
//     return new Promise(function (resolve, reject) {
//         // 3초 고민 (3초 후 실행)
//         setTimeout(function () {
//             console.log('고민 끝!');
//             product = '콜라'
//             price = 1800;
//             const mymoney = 2000;
//             if (price < mymoneyl) {
//                 resolve(); //성공을 의미하는 resolve를 실행
//             }else{
//                 reject(); //실패를 의미하는 reject를 실행
//             }
//             // resolve()
//         }, 3000);
//     })
// }

// function pay(product, price) {
//     console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// let product;
// let price;
// goMart();
// pickDrink().then(()=>{
//     pay(product, price);
// }).catch(()=>{
//     console.log('돈이 부족합니다.');
// });


// ----------------프로미스 체이닝-----------------
// 함수를 이용해서 (4+3)*2-1 = 13을 연산하기!

// 1. 콜백함수 사용
// function add(n1, n2, cb) {
//     setTimeout(() => {
//         let result = n1 + n2;
//         cb(result);
//     }, 1000);
// }
// function mul(n, cb) {
//     setTimeout(() => {
//         let result = n * 2;
//         cb(result);
//     }, 700);
// }
// function sub(n, cb) {
//     setTimeout(() => {
//         let result = n - 1;
//         cb(result);
//     }, 500);
// }
// add(4, 3, function (result1) { //마지막 파라미터는 콜백함수
//     console.log(result1);   //첫번째 add 함수 결과
//     mul(result1, function (result2) {  //마지막 파라미터는 콜백함수
//         console.log(result2); //두번째 mul 함수 결과
//         sub(result2, function (result3) { //마지막 파라미터는 콜백함수
//             console.log(result3); //세번째 sub 함수 결과
//         })
//     })
// })

// 2. 프로미스 사용
function add(n1, n2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = n1 + n2;
            resolve(result);
        }, 1000);
    })
}
function mul(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result = n * 2;
            // resolve(result);
            // 의도적 오류 만들기
            reject('의도적 에러');
        }, 700);
    })
}
function min(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            result = n - 1;
            resolve(result);
        }, 500);
    })
}

add(4, 3)
    .then(function (result) {
        console.log('add result : ', result);
        return mul(result);
        // return을 안붙이면 다음 함수로 값이 넘어가지 않음
    })
    .then(function (result) {
        console.log('mul result : ', result);
        return min(result);
    })
    .then(function (result) {
        console.log('min result : ', result);
    })
    .catch(function (error) {
        console.log(error);
    })

    