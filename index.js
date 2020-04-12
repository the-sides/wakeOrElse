const env = require('dotenv').config()
const Twitter = require('twitter')
const alarm = require('alarm')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const tweet = msg => {
  client.post(
    'statuses/update', 
    { status: msg },  
    function(error, tweet, response) {
      if(error) throw error;
      console.log(tweet);  // Tweet body.
      console.log(response);  // Raw response object.
  });
}

const time = new Date('April 12, 2020 19:15:00')

alarm(time, function(){
  tweet("If you're seeing this, then it means I went against my mother's concerns, made the bot and it works. No one is safe...")
})