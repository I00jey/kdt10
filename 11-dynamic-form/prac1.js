const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended : true}))
app.use(express.json());

app.get('/', (req, res) => {
    res.render('prac1');
})

app.get('/axios', (req,res)=>{
    res.send(req.query);
    console.log(req.query);
})

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
})
