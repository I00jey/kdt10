function first() {
    second();
    console.log(1);
}
function second() {
    third();
    console.log(2);
}
function third() {
    console.log(3);
}
// LIFO 방식 : last in first out 
// first()

function run() {
    console.log('3초 뒤 실행');

}
console.log('시작');
setTimeout(run, 3000); //실행할 함수, 밀리초 단위
console.log('끝');