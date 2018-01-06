var friends = require("../data/friends.js");
// =============================================================
// ROUTING
// =============================================================

module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // --------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    
    var bestMatch = {
        name: "", 
        photo: "", 
        friendDifference: 1000
    }; 
    console.log (req.body);

    //here we take the result of the user's survey post and parse it
    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);
    
    var totalDifference = 0;

    //Here we loop through all the friend possibilities in the database
    for (var i=0; i< friends.length; i++) {
        console.log(friends[i]);
        totalDifference = 0;

        //we then looop through all the scores of each friend
        for (var j =  0; j < friends[i].scores.length; j++) {
            
            //calculate the difference between the scores and sum them into the total difference
            totalDifference += Math.abs(parseInt(userScores[j])- parseInt(friends[i].scores[j]));
            
            //if the sum of the difference is less then the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {

                //Reset the bestMatch to bet the new friend.
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }

    //finally save the user's data to the database 
    friends.push(userData);

    //return a json with the users's bestMatch. this will be used by the html in the next page
    res.json(bestMatch);
  });
};
