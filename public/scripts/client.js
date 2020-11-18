/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

// TEMP: Dummy tweets data
const twoots = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": new Date(2020, 10, 1)
  },
  {
    "user": {
      "name": "Bingbong",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@sizzler"
    },
    "content": {
      "text": "You've never seen a twerk like mine"
    },
    "created_at": 1605546132560
  },
];


const createTweetElement = function(tweetObj) {
  // Calculate tweet age in days, rounded down
  const tweetAge =  Math.floor(
    (new Date() - tweetObj.created_at) /
    (1000 * 60 * 60 * 24)
  );
  // Insert tweet data into html template as it should appear in tweets feed section
  let tweetHtml = `
    <article class="tweet">
      <header>
        <div>
          <img src="${tweetObj.user.avatars}">
          <span>${tweetObj.user.name}</span>
        </div>
        <span class="handle">${tweetObj.user.handle}</span>
      </header>
      <p>${tweetObj.content.text}</p>
      <footer>
        <span>${tweetAge} days ago</span>
        <div class="tweet-actions">
          <a href="#"><img src="/images/flag-tweet.png" alt="Flag tweet"></a>
          <a href="#"><img src="/images/share-tweet.png" alt="Share tweet"></a>
          <a href="#"><img src="/images/heart-tweet.png" alt="Heart this tweet"></a>
        </div>
      </footer>
    </article>
  `;
  return tweetHtml;
};

// Once document finished loading...
$(document).ready(() => {

  // Render each tweet in db, appending to #tweets-container html id
  const renderTweets = function(tweetsArr) {
    for (const tweet of tweetsArr) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  };

  // Capture form submission, prevent default behaviour, post using AJAX
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    
    /* Make AJAX post request using serialized form data
     * On return (use .done(), .then() doesn't seem to work)
     * make a get request to check data has entered db */
    $.ajax({
      url: '/tweets', 
      method: 'post', 
      data: $(this).serialize(), 
    }).done(
      console.log('twoots db:', $.ajax('/tweets'))
    )
  });

  renderTweets(twoots);

});