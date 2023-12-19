const express = require('express')
const app = express()

//! database-connection
require('./config/db.connection')


//! ejs import
app.set('view engine', 'ejs')

//! public static
app.use(express.static('public'));

//! cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser())

//! body-parser
const bodyParser = require('body-parser');     
app.use(bodyParser.urlencoded({extended:false}));  //* artık veriler parse edilebilir.
app.use(bodyParser.json());

//! routes

const routes = require('./routes/main')
app.use(routes)

app.use((req, res, next) => {
    res.status(404).render('404');
  });






app.listen(3000) 