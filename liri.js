require("dotenv").config();

console.log(process.env.TWITTER_CONSUMER_KEY);

var Twitter = require('./keys');
var Spotify = require('./keys');


if (process.argv[3]) {
    var client = process.argv[3];
}


client.get('favorites/list', function (error, tweets, response) {
    if (error) throw error;
    console.log(tweets);  // The favorites. 
    console.log(response);  // Raw response object. 
});







