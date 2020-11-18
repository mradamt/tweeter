/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
    "created_at": 1461116232227
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
  "created_at": 1461116232211
},
]


const createTweetElement = function(tweetObj) {
  const now = new Date();
  let tweetArticle = `
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
        <span>${now - tweetObj.created_at}</span>
        <div class="tweet-actions">
          <a href="#"><img src="/images/flag-tweet.png" alt="Flag tweet"></a>
          <a href="#"><img src="/images/share-tweet.png" alt="Share tweet"></a>
          <a href="#"><img src="/images/heart-tweet.png" alt="Heart this tweet"></a>
        </div>
      </footer>
    </article>
  `
  return tweetArticle
}



$(document).ready(() => {

  const renderTweets = function(tweetsArr) {
    let $tweet;
    for (const tweet of tweetsArr) {
      $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet)
    }
  }

  renderTweets(twoots)
  // const $tweet = $(`<article class="tweet">Hello world</article>`);
  // // $('#tweets-container').append($tweet)

  // for (const twoot of twoots) {
  // //   // tweetArticle = createTweetElement(twoot)
  //   $('#tweets-container').append(`${twoot}`)
  //   // $('#tweets-container').append(`<article class="tweet">${twoot}</article>`)
  // }

})