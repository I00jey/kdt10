const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})

// ajax
app.get('/ajax', (req,res) =>{
    console.log(req.query);
    res.send(req.query);
})
app.post('/ajax', (req,res) => {
    console.log(req.body);
    res.send(req.body);
})

// axios
app.get('/axios', (req, res)=>{
    console.log(req.query);
    res.send(req.query);
    // 일부러 에러 발생
    // res.status(400).send('error > response > data')
})
app.post('/axios', (req, res)=>{
    console.log(req.body);
    res.send(req.body);
    // 일부러 에러 발생
    // res.status(400).send('error > response > data')
})

// fetch
app.get('/fetch', (req,res)=>{
    console.log(req.query);
    res.send(req.query);
})
app.post('/fetch', (req,res)=>{
    console.log(req.body);
    // res.send(req.body);

    // 클라이언트로 보내는 데이터에 값 추가 가능
    res.send({name : req.body.name,
    gender : req.body.gender, msg : 'fetch 성공'});
})

app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
})