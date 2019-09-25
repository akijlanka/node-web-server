const express= require('express');
const hbs=require('hbs');

var app=express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.send({
        name:'Akila',
        age:23,
        city:'Galle',
        likes:[
            'bike',
            'gaming'
        ]
    });
});

app.get('/about', (req, res)=>{
    res.render('about.hbs');
});


app.get('/bad', (req, res)=>{
    res.send({
        errorMsg:'Bad Request'
    });
});

app.listen(3000, ()=>{
    console.log('Port up on 3000');
});