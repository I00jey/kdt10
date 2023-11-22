// 클래스
// : 객체 생성 템플릿 --> 객체를 만들기 위해 사용

// 집 클래스
/**
 * 속성 :
 * 만들어진 연도, 집 이름, 창문 갯수 등등
 * 메서드 :
 * 창문 갯수 출력하는 메서드, 집 이름 출력하는 메서드
 */

// 클래스 정의
class House{
    // 생성자 함수
    // : 클래스를 이용해 객체를 생성할 때마다 속성을 초기화
    constructor(year, name, window){
        this.year = year;
        this.name = name;
        this.window = window;
    }

    // 메소드 1 : 집의 연도 출력
    getAge(){
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 됐다!`);
    }
    // 메소드 2 : 창문 갯수 출력
    getWindow(){
        console.log(`${this.name}의 창문 갯수는 ${this.window}`);
    }
}

// 클래스를 이용해서 객체 만들기
const house1 = new House(2010, '아파트', 5);
console.log(house1);
console.log(house1.year);
console.log(house1.name);
console.log(house1.window);
house1.getAge();
house1.getWindow();

const house2 = new House(2012,'빌라',20);
console.log(house2.name);
house2.getAge();

// 클래스 상속
// 부모 클래스 : House
// 자식 클래스 : Apartment
class Apartment extends House{
    constructor(year, name, window, floor){
        // 부모 객체에서 상속 받음 -> 상속받은 부모 클래스의 생성자를 호출하는 것
        super(year,name,window);
        // 자식 객체에서 만든 생성자이므로 따로 선언
        this.floor = floor;
    }
    getFloor(){
        return `${this.year}년에 지어진 ${this.name}아파트의 층수는 ${this.floor}`
    }
    // 오버라이딩
    // 부모 클래스에 정의되어 있는 메소드를 이름은 동일하게 쓰되, 내용은 다르게
    getAge(){
        console.log(`${2023- this.year}년 된 아파트는 총 ${this.floor}층이다`);
    }
}


const apt1 = new Apartment(2015, '레미안',100, 50);
console.log(apt1);
console.log(apt1.getFloor());
apt1.getAge();

// 실습 Shape 클래스 만들기
class Shape{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        console.log(this.width*this.height); 
    }
}
// 실습 클래스 상속
class Rectangle extends Shape{
    // 부모 생성자에 변동이 없으면 생략 가능 constructor
    constructor(width,height){
        super(width,height)
    }
    getDiagonal(){
        console.log(Math.sqrt(this.width**2 + this.height**2));
    }
}
class Triangle extends Shape{
    constructor(width,height){
        super(width,height)
    }
    getArea(){
        console.log(this.width*this.height/2);
        }
}
class Circle extends Shape{
    constructor(width,height,radius){
        super(width,height)
        this.radius = radius;
    }
    getArea(){
        console.log('원 넓이',this.radius*this.radius*3.14); 
    }
}

const rec = new Rectangle(3,4);
const tri = new Triangle(3,4);
const cir = new Circle(0,0,3);
rec.getArea()
rec.getDiagonal()
tri.getArea()
cir.getArea()