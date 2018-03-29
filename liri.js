require("dotenv").config();

console.log(process.env.TWITTER_CONSUMER_KEY);

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);




