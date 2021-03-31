var path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const port = 3000;
const app = express();
const route = require('./routes');
const db = require('./config/db/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: 'true',
    }),
);
app.use(express.json());
app.use(morgan('combined'));
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
console.log('path: ', __dirname);
db.connect();
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
