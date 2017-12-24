// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var jsonParser = bodyParser.json()
//store reservation details
// var name = "";
// var phoneNumber = "";
// var email = "";
// var uniqueID = 0;
var urlencodedParser = bodyParser.urlencoded({ extended: false})
// Sets up the Express app to handle data parsing
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type: 'text/html'}))

// Hot Restaurant Reservations
// =============================================================
// var reserves = [
//     // {
//     //     name: "Table1",
//     //     phoneNumber: "123-456-7890",
//     //     email: "table1@gmail.com",
//     //     uniqueID: 1
//     // },
//     // {
//     //     name: "Table2",
//     //     phoneNumber: "123-456-7890",
//     //     email: "table2@gmail.com",
//     //     uniqueID: 2
//     // },
//     // {
//     //     name: "Table3",
//     //     phoneNumber: "123-456-7890",
//     //     email: "table3@gmail.com",
//     //     uniqueID: 3
//     // }
// ];

// var waitlist =[];

// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function (req, res) {
//     // res.send(home page of the hot restaurant)
//     //give back the absolute path
//     console.log(path.join(__dirname, "home.html"));
//     res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/reserve", function (req, res) {
//     // res.send(view stored reservations)
//     //give back the absolute path
//     console.log(path.join(__dirname, "reserve.html"));
//     res.sendFile(path.join(__dirname, "reserve.html"));
// });

// app.get("/table", function (req, res) {
//     // res.send(make new reservation table)
//     //give back the absolute path
//     console.log(path.join(__dirname, "table.html"));
//     res.sendFile(path.join(__dirname, "table.html"));
// });

// // Get json version of all reserves
// app.get("/api/tables", function (req, res) {
//     res.json(newReserve);
// });

// app.get("/api/waitlist", function (req, res) {
//     //need update
//     res.json(waitlist);
// });

// // Search for Specific Character (or all characters) - provides JSON
// // app.get("/api/:characters?", function (req, res) {
// //     var chosen = req.params.characters;

// //     if (chosen) {
// //         console.log(chosen);

// //         for (var i = 0; i < characters.length; i++) {
// //             if (chosen === characters[i].routeName) {
// //                 return res.json(characters[i]);
// //             }
// //         }
// //         return res.json(false);
// //     }
// //     return res.json(characters);
// // });

// // // Create New Characters - takes in JSON input
// app.post("/api/table", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var newReserve = req.body;

//     console.log(newReserve);

//     // We then add the json the user sent to the character array
//     if(reserves.length<=5){
//         reserves.push(newReserve);
//     } else {
//         waitlist.push(newReserve);
//     }
    

//     // We then display the JSON to the users
//     res.json(newReserve);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});