// 실습 1

let olimpic_newgame: readonly [object, boolean] = [
    {
        name: "lol",
        type: "e-sports",
    },
    true,
];
console.log(olimpic_newgame);
// olimpic_newgame[1ToyCar] = false;

// 실습2
interface Game {
    title: string;
    price: number;
    desc?: string;
    category: string;
    platform: string;
}
// 아래 나와 있는 heroGame_A 와 heroGame_B 를 만족할 수 있는 interface Game 만들어보기
let heroGame_A: Game = {
    title: "DC 언체인드",
    price: 50000,
    desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
    category: "액션",
    platform: "모바일",
};

let heroGame_B: Game = {
    title: "MARVEL 퓨처파이트",
    price: 65000,
    category: "롤플레잉",
    platform: "모바일",
};

console.log(heroGame_A);
console.log(heroGame_B);

// 실습 3
const sum1 = (a: number, b: number): void => {
    console.log(a + b);
};
sum1(5, 11);

// 실습 4
function arrElement<A>(arr: A[], num: number): any {
    if (arr.length < num) {
        return false;
    }
    return arr[num];
}
console.log(arrElement<string>(["apple", "banana", "kiwi"], 4));
