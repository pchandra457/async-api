const express = require('express');
const routes = require('./routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

app.listen(8081, () =>{
   console.log(`server is running at: http://localhost:8081`); 
});