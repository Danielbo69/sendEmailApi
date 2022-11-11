const express = require('express');
const app = express();
const morgan = require('morgan');
const nodemailer = require('nodemailer');

//settings
app.set('port', process.env.PORT || 4000)
app.set('json spaces', 2)

//routes
// app.use(require('./src/routes/index'));
app.use('/api/sendEmail', require('./src/routes/sendEmail'));

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// starting the server
app.listen(`${app.get('port')}`, () => {
    console.log(`Server on port http://localhost:${app.get('port')}`);
});