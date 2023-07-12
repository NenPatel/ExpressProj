const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const hbs = require("hbs");

const staticPath = path.join(__dirname,"../public")

const templatePath = path.join(__dirname,"../templates/views");

const partialsPath = path.join(__dirname,"../templates/partials");

app.set("view engine", "hbs");
app.use(express.static(staticPath))

app.set("views",templatePath);

hbs.registerPartials(partialsPath);

app.get("/",(req,res) => {
    res.render("index")
});

app.get("/about",(req,res) => {
    res.render("about")
});

app.get("/weather",(req,res) => {
    res.render("weather")
});

app.get("*",(req,res) => {
    res.render("404",{
        errMess : "Oops!! Page Not Found"
    })
});

app.listen(port,() => {
    console.log(`Listening to port at ${port}`);
});