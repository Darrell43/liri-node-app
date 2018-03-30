require("dotenv").config();

console.log(process.env.TWITTER_CONSUMER_KEY);

var Twitter = require('./keys');
var Spotify = require('./keys');



spotify
  .request('https://api.spotify.com')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });






