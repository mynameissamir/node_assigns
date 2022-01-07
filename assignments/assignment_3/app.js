const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const bodyParser = require("body-parser");

app.use(bodyParser());
var users=[];
users.push({
    name:"sameer",
    age:30,
    email: "smaeer@gmail.com",
    city: "bangolare",
    profession:"IT"

})

app.set('views', './views');
app.set('view engine','ejs');
app.get("/",(req,res) =>{
    res.render("home.ejs", {users});

});

app.get("/form",(req,res) =>{
    res.render("form.ejs");

});
app.post("/add/user",(req,res) => {
    
    users.push({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city,
        profession:req.body.profession,
    })
    res.redirect("/");

});
app.listen(3000, ()=>console.log("server is running"));