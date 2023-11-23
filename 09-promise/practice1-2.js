function call(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name);
            resolve(name)
        }, 1000);
    })
}
function back() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('back');
            resolve('back')
        }, 1000);
    })
}
function hell() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('callback hell')
            reject('예외 발생')
        }, 1000);
    })
}



// promise -> async, await 추가
async function exec() {
    try {
        let one = await call('kim');
        console.log(one + ' 반가워!'); //kim반가워
        let two = await back();
        console.log(two + '을 실행했구나'); //back을 실행했구나
        // 오류(reject)가 발생했으니 아래 2줄은 실행되지 않음 -> catch 문으로 넘어감
        let three = await hell();
        console.log('여기는 ' + three);
    } catch (error) {
        // reject()는 catch에 담김
        // error는 reject( )의 내용
        // 여러 개의 예외가 발생하는 경우에도 catch 블록은 그 중 첫 번째 예외만 받아들임
        console.log(error); //hell
    }
}
exec();

// 콜백함수 -> promise 변환
// call('kim')
// .then((name)=>{
//     console.log(name + '반가워');
//     return back();
// })
// .then((txt)=>{
//     console.log(txt + '을 실행했구나');
//     return hell();
// })
// .then((message)=>{
//     console.log('여기는'+ message);
// });
