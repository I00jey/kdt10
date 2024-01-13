function numArrLen(arr: number[]): number {
    return arr.length;
}
function strArrLen(arr: string[]): number {
    return arr.length;
}

// generic
// 선언할 때 타입을 지정하기 어려운 경우 존재
// => 데이터 타입을 외부에서 지정
// => 생성 시점에서 타입을 명시
// => "재사용성 증가"
// => 타입을 변수처럼 사용하는 것
// 형태는 주로 <T>를 사용함 -> 사용 시 T는 type만 작성가능
function arrLen<T>(arr: T[]): number {
    return arr.length;
}
console.log(arrLen<number>([1, 2, 3]));
// 위 코드와 동일한 코드
// function arrLen<number>(arr: number[]): number {
//     return arr.length;
// }
console.log(arrLen<string>(["1", "2", "3", "4", "5"]));

function print3<T>(x: T, y: T): void {
    console.log(x, y);
}
print3<string>("바보", "안녕");

function print4<T, U>(x: T, y: U): void {
    console.log(x, y);
}
print4<string, number>("쉬는시간", 10);

// interface과 generic
interface Phone<T> {
    company: string;
    createAt: Date;
    option: T;
}
type iphoneOption = {
    color: string;
    storage: number;
};
const iphone13Pro: Phone<iphoneOption> = {
    company: "apple",
    createAt: new Date("2022-10-1"),
    option: {
        color: "silver",
        storage: 128,
    },
};

const iphone13: Phone<string> = {
    company: "apple",
    createAt: new Date("2022-10-1"),
    option: "silver",
};

console.log(iphone13Pro);
console.log(iphone13);
