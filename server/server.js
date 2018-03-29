var express 	= require('express');
var app			= express();
var connect 	= require('connect');
const path = require('path');
var env = require('dotenv').load();
const port = 8000;
app.use(connect.static(path.join(__dirname , '..' ,  '/public')));
// app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());

console.log(__dirname, 'dirname')
var models = require("./models/index.js");
 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

console.log('hello world')
require('./routes')(app);

// app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the Todos API!',
//   }));
app.get('/', (req, res) => {
    res.send('Hello world\n');
  });
app.listen(port);

console.log(`Running on ${port}`)