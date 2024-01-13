// 명시적으로 타입 지정
let a: number = 1;
a = 5;
// a = "안녕하세요"; //type error
console.log(a);

let b: string = "str";
let c: boolean = true;
let d: null = null;
let e: undefined;

// 타입 추론 (암묵적으로 타입 지정됨)
let aa = 5;
let bb = "hello";
let cc = false;
let dd = null;
let ee;

// 배열
// 배열 타입을 지정하는 방법
// 1. type[]
let numArr: number[] = [1, 2, 3, 4, 5];
// numArr = ["1", "2", "3"]; // type error

// 2. Array<type>
let strArr: Array<string> = ["coffee", "latte", "juice"];

// 배열의 원소가 여러 타입일 경우
let arr1: (number | string | number[])[] = [8, "birth", numArr];

// 모든 자료형을 넣을 수 있는 배열
let arr2: any[] = [1, "string", null, [1, 2, 3], ["1", "2", "3"], true];

// 객체
let obj: object = { name: "ella", age: "23" };
