var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('path: ',__dirname);
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})