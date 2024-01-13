function print(a: number, b: number, c?: number): void {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
}
// print(1, 2, 3); // a=1, b=2, c=3
// print(4, 5); // a=4, b=5, c=undefined

// 매개변수 기본값 할당 가능
function print2(a: number, b: number, c = 50): void {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
}
print2(1, 2, 3);
print2(4, 5);

// 매개변수 없는 함수
function printHello(): void {
    console.log("printHello");
}
printHello();

// return값이 있는 함수 (void가 아닌)
function sayHello(): string {
    return "sayHello";
}
console.log(sayHello());

function returnNum(): number {
    return 100 + 100;
}
console.log(returnNum());

function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(831, 810));

// 화살표 함수
const sum2 = (a: number, b: number): number => {
    return a + b;
};
console.log(sum2(123, 221));

// 화살표 함수 + return 생략

const sum3 = (a: number, b: number): number => a + b;
console.log(sum2(810, 1214));

// interface 정의 시 함수 타입 표현
interface Greet {
    name: string;
    hi(): string;
    bye(a: number): string;
}

const dohwa: Greet = {
    name: "dohwa",
    hi() {
        return "여기는 " + this.name + " 캠퍼스";
    },
    bye(a: number) {
        return `잘 가라는 인사를 ${a}번 했습니다`;
    },
};

console.log(dohwa.hi()); //여기는 dohwa 캠퍼스
console.log(dohwa.bye(1)); //잘 가라는 인사를 1번 했습니다

// never : 함수가 절대 끝나지 않는 경우
function goingOn(): never {
    while (true) {
        console.log("GoGo!");
    }
} // 무한 루프에 빠져 함수가 끝나지 않음
