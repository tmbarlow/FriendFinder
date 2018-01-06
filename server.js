// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//create application parser
app.use(bodyParser.urlencoded({ extended: true}));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));

//parse an html body into string
app.use(bodyParser.text({ type: 'text/html'}))

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});