const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('prac1')
})
// app.get('/signup', (req, res) => {
//     res.render('pracresult',{
//         title : 'get 정보 받기 성공!',
//         userInfo : req.query
//     })
// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/signup', (req, res) => {
    res.render('pracresult', {
        title: 'post 정보 받기 성공!',
        userInfo: req.body
    })
})

app.listen(PORT, function () {
    console.log(`${PORT} is open`);
    console.log(`http://localhost:${PORT}`);
})

