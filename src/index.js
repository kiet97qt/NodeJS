const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const port = 3000;
const app = express();
var path = require('path');

app.use(morgan('combined'))
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('path: ',__dirname);
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})