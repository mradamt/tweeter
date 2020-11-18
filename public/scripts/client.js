/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

// Insert tweet data into html template ready to display on main page
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

/*****************************************
 *  On full document load
 *****************************************/
$(document).ready(() => {

  /* Fetch tweets array from server and pass array to render function */
  const loadTweets = function(n) {
    $.ajax('/tweets')
    .then(function(data) {
      // If 'n' is specified, call render on nth-last item, *as an [array]*
      if (n) {
        renderTweets([data[data.length - n]])
      } else {
        renderTweets(data)
      }
    });
  }

  /* Render tweets database into #tweets-container */
  const renderTweets = function(tweetsArr) {
    for (const tweet of tweetsArr) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  };

  /* POST new tweet data to server */
  $('.new-tweet form').submit(function(event) {
    // Prevent browser refresh
    event.preventDefault();
    
    // Validate user input
    const $data = $('#tweet-text')
    if (!$data.val()) {
      return alert('Empty tweets not allowed')
    }
    if ($data.val().length > 140) {
      return alert('Tweet exceeds 140 characters')
    }

    /* Make AJAX post request using serialized form data
     * On return (use .done(), .then() doesn't seem to work)
     * then TODO: figure out how to append tweets to top of page */
    $.ajax(
      { 
        url: '/tweets', 
        method: 'post', 
        data: $(this).serialize(), 
      })
      .done(function() {
        $data.val('')
        loadTweets(1)
      }
    )
  });

  loadTweets();
});