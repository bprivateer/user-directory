const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./index.js')
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


// express.app.use('./index.js', express.static(path.join(__dirname, 'files')))

//
// app.get("/", function( req, res){
//   res.render()
// } );



app.get('/', function (req, res){
  res.render("index", data)
});

// app.get("/data", function( req, res){
//   res.render(data)
// })

app.listen(3000, function(){
console.log("Success");
});
