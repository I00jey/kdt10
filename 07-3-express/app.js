const express = require('express');
const app = express();
const port = 8000;

// ejs 템플릿 설정
// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine', 'ejs');
// 템플릿 엔진 파일(.ejs)을 저장할 위치
app.set('views','./views');

// static 미들웨어 등록 (정적 파일 로드 css, js)
// static 라는 실제 폴더를 static 이름으로 접근하겠다.
// 2 파라미터 경로에 1 파라미터 파일을 만들겠다.
app.use('/static', express.static(__dirname + '/static'));
console.log(__dirname); // ~~/07-3-express

// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// localhost:8000/ 경로로 접속했을 때
app.get('/',function(req, res){
    // res.send('응답 내용')
    // res.send('<h1>Hello Express!</h1>')

    //ejs 템플릿 렌더링
    // index라는 파일명을 찾아서 해당 파일 렌더
    res.render("index");
})
app.get('/kdt',function(req, res){
    // res.send('응답 내용')
    res.send('<h1>Hello kdt!</h1>')
})
app.listen(port, function () {
    console.log('server listening on ' + port);
})
