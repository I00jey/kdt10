// tuple
let drink: [string, string] = ["coffee", "juice"];
drink[0] = "콜라";
drink[1] = "사이다";
// drink.push("환타"); // 요소 추가는 가능하지만 Tuple 타입 사용이유가 사라지게 됨
// drink[2] = "환타"; // Tuple의 한계를 넘기 때문에 에러 발생
console.log(drink);

// readonly : 요소 타입과 순서와 길이를 고정
let drink2: readonly [string, number] = ["coffee", 2000];
// drink2.push("환타"); // type error

// enum
enum Auth {
    admin = 0,
    user = 1,
    guest = 2,
}
console.log(Auth.admin, Auth.user, Auth.guest);

enum Cafe {
    americano = "아메리카노",
    latte = "라떼",
}
enum Cake {
    carrot,
    choco,
    fruits = "과일 케이크",
}
console.log(Cake.choco); // 1
console.log(Cake.fruits); // 과일 케이크

// any
// 명시적으로
let value: any;
value = 1;
value = "str";
value = false;
value = null;
value = [1, 2, "what", ["americano", "latte"]];

// 암묵적으로
let value2;
value2 = "get";
value2 = 324;
value2 = true;
value2 = null;
value2 = ["a", "b", [1, 2, 3]];

// ----------------------------------------------
// type & interface

// interface
interface Student {
    name: string;
    isPassed: boolean;
}
const student: Student = {
    name: "ella",
    isPassed: true,
};
const student2: Student = {
    name: "babo",
    isPassed: false,
};
// obejct 타입 사용 시 key.value의 타입을 지정하지 않음
const student3: object = {
    name: "yuki",
    isPassed: true,
};

// interface 상속
enum Score {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F",
}
interface BaseballClub extends Student {
    position: string;
    height: number;
    backNumber?: number; // 변수? : 자료형 => 있어도 되고 없어도 에러 발생하지 않는 데이터
    [grade: number]: Score; // 키 자체의 타입 지정 가능
    // 상속을 받은 키는 값이 없을 수도 있음
}
const otani: BaseballClub = {
    name: "otani",
    isPassed: true,
    position: "picher",
    height: 193,
    backNumber: 8, // 생략해도 오류 X
    1: Score.A, // 1: 'A'
    // Score를 상속받음
    // 생략해도 오류 X
    // 상속을 받은 키는 값이 없을 수도 있으니까
};
console.log(otani);

// type
type Gender = "Female" | "Male";
const gender: Gender = "Female";
// const gender2: Gender = "female"; // type에서 지정하지 않은 값이 들어올 경우 type error
const gender3: Gender = "Male";
// const gender4: Gender = "male";  // type에서 지정하지 않은 값이 들어올 경우 type error

// type vs enum
// 선언
enum userNumber {
    ten = 10,
    one = 1,
    two = 2,
}
type userNumber2 = 10 | 1 | 2;
// 사용
const num1: userNumber = userNumber.ten;
const num2: userNumber2 = 10; // or 1

// 교차 타입 : 두 개 이상의 타입을 합치는 것
interface Toy {
    name: string;
    price: number;
}
interface Car {
    name: string;
    price: number;
    color: string;
}

type ToyCar = Toy & Car;
const toycar: ToyCar = {
    name: "tayo",
    price: 56000,
    color: "blue",
};
console.log(toycar);

// type Gender = "Female" | "Male"
type Person = {
    name: string;
    age: number;
    hobby: string[];
    gender: Gender;
};
let layla: Person = {
    name: "layla",
    gender: "Female",
    age: 20,
    hobby: ["baking", "sleep"],
};
console.log(layla);
