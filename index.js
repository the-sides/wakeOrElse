const env = require('dotenv').config()
const Twitter = require('twitter')
console.log(process.env.apiKey)

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

client.post('statuses/update', {
  status: 'Working on a Twitter bot to wake me up in the morning. It will post embarrassing tweets at a particular time unless I wake up to stop it. I am apologizing in advance... Hopefully, this will not be a problem...'},  
  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
});