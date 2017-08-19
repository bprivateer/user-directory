const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const data = require('./index.js')
const app = express();
// let user = data[i -1];


app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.use(express.static("./public"))
//

app.get('/', function (req, res){
  res.render("index", data)
});

app.get('/hello/:id', function (req, res){
  let id = req.params.id;
  // let user = data.users[req.params.id -1]
  let user = data.users.find(function(user){
    return user.id == id;
  });

  console.log(req.params.id)
  console.log(user.username)
  res.render("view", user)

});

// app.get("/data", function( req, res){
//   res.render(data)
// })  --->commented out

app.listen(3000, function(){
console.log("Success");
});

// {
//   "id":1,
//   "username":"hjuza0",
//   "name":"Hamlen Juza",
//   "avatar":"https://robohash.org/blanditiisexercitationemquaerat.png?size=150x150&set=set1",
//   "email":"hjuza0@blogger.com",
//   "university":"Pomor State University",
//   "job":"Engineer IV",
//   "company":"Stark, Feil and Bode",
//   "skills":[
  //   "DMVPN",
  //   "HDX",
  //   "Rhino 3D"
  // ],
//   "phone":"7-(397)813-7803",
//   "address":{
        // "street_num":"78226",
      //   "street_name":"Ryan",
      //   "city":"Kamennogorsk",
      //   "state_or_province":null,
      //   "postal_code":"188950",
      //   "country":"Russia"
  // }
// }
