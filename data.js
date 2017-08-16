const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./index.js')
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.use(express.static("./public"))

//
// app.get("/", function( req, res){
//   res.render()
// } );



app.get('/', function (req, res){
  res.render("index", data)
});

app.get('/listings/:id', function (req, res){
  console.log(req.params.id)
  console.log(req.params.id, {user})

  // res.render(req.params.id);
  res.send("yay")
});

app.get("/data", function( req, res){
  res.render(data)
})

app.listen(3000, function(){
console.log("Success");
});


// -- /index/:id --
// <a href=""
