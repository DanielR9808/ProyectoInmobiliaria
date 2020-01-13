const express = require('express');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const app = express();
dotenv.config()

// Db connection
mongoose.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(db => { console.log("conexion a db") })
  .catch(err => { console.log(err) })


// Settings 
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/immovable', require('./src/routes/immovableRoute'));
app.use('/api/user', require('./src/routes/userRoute'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
