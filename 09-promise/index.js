// ex. 편의점에서 들어가서 음료수를 사고 나오는 상황
// function goMart() {
//     console.log('마트에 와서 어떤 음료를 살지 고민중..');
// }

// function pickDrink() {
//     // 3초 고민 (3초 후 실행)
       // setTimeout을 쓰는 이유는 순차적으로 실행된다는 것을 명시적으로 표현하기 위해
       // 비동기 방식인 자바스크립트에서 동기 환경을 구현하기 위해서
//     setTimeout(() => {
//         console.log('고민 끝!');
//         product = '콜라'
//         price = 1800;
//     }, 3000);
// }

// function pay(product, price) {
//     console.log(`상품명 : ${product}, 가격 : ${price}`);
// }

// let product, price;
// goMart();
// pickDrink();
// pay(product, price);


// 자바스크립트는 비동기 방식이다 -> 동기 방식으로 실행하기 위해서 콜백, promise, promise(async-await)
// ----------------------------------------------
// 비동기 방식으로 작성된 함수를 동기 처리(순차적 실행)하기 위하여 콜백함수 사용
// 콜백함수
function goMart() {
    console.log('마트에 와서 어떤 음료를 살지 고민중..');
}

function pickDrink(callback) {
    // 3초 고민 (3초 후 실행)
    setTimeout(() => {
        console.log('고민 끝!');
        product = '콜라'
        price = 1800;
        // 위의 코드가 실행된 이후 실행될 콜백함수
        callback(product,price);
    }, 3000);
}

function pay(product, price) {
    console.log(`상품명 : ${product}, 가격 : ${price}`);
}
goMart();
// pay라는 함수를 콜백함수로 넘겨줌
// pickDrink(pay);

// pay 함수를 함수 호출 마라미터에서 정의
pickDrink(function pay(product, price) {
    console.log(`상품명 : ${product}, 가격 : ${price}`);
})


