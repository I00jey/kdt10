// rest 파라미터

// 1. 함수에서 rest 파라미터 사용
const values = [10,20,30,40,50];
// 함수 선언 (rest 사용)
function get(a, b, ...rest) {
    console.log('a>',a);        //1
    console.log('b>',b);        //2
    console.log('rest>',rest);  // [3, 4, 5]
}
// 함수 호출 (spread 사용)
get(...values);
get(values)
/*
a> [ 10, 20, 30, 40, 50 ]
b> undefined
rest> [] 
*/


// 2. 객체에서 rest
const icecream = {
    flavor : 'cherry',
    price : 1000,
    company : '빙그레'
}
const {flavor, ...rest} = icecream;
console.log('favor > ', flavor);    //cherry
console.log('rest > ', rest);       //{ price: 1000, company: '빙그레' }


//  3. 배열에서 rest
const number = [1,2,3,4,5,6];
const [one,two, ...rest1] = number;
console.log('one >', one);  //1
console.log('two >', two);  //2
console.log('rest >', rest1);//[ 3, 4, 5, 6 ]
