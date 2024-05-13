const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs({ extname: 'hbs', layoutsDir: './layouts', defaultLayout: 'main' }));
app.set('view engine', '.hbs');
app.engine('.hbs', hbs());


app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/user', (req, res) => {
    res.render('forbidden');
});

app.get('/', (req, res) => {
  res.render('home',);
});

app.get('/contact', (req, res) => {
  res.render('contact',);
});

app.get('/info', (req, res) => {
  res.render('info',);
});

app.get('/history', (req, res) => {
  res.render('history',);
});



app.get('/home', (req, res) => {
    res.render('home',);
});
  

app.get('/about', (req, res) => {
  res.render('about',);
});

app.get('/test.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/test.png'));
  });
 
app.get((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views/404'));
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});