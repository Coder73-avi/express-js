
const { static } = require('express');
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;
// const port = 3000;

// public static path
const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');
// console.log(staticPath);

app.set('view engine', 'hbs');
app.use(express.static(staticPath));
app.set('views',templatePath);


hbs.registerPartials(partialsPath);


// routing
app.get('/',(req,res)=>{

    // res.send('Hello world');
    res.render('index');
});
app.get('/about',(req,res)=>{

    // res.send('Hello world');
    res.render('about');
});
app.get('/weather',(req,res)=>{

    // res.send('Hello world');
    res.render('weather');
});



app.get('*',(req,res)=>{
    // res.send('404 error, Opps Page not found.');
    res.render('404error',{
        error_message : 'error, Opps page not found.',
    });
});



app.listen(port,()=>{
    console.log(`Server start port no: ${port}`);
});
