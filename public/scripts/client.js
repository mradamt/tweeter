/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

// Escape function to prevent XSS injection
const escape = (str) => {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Insert tweet data into html template ready to display on main page
const createTweetElement = function(tweetObj) {
  // Calculate tweet age in days, rounded down
  const tweetAge =  Math.floor(
    (new Date() - tweetObj.created_at) /
    (1000 * 60 * 60 * 24)
  );
  /* Insert tweet data into tweets feed html template
   * IMPORTANT: escape all user-generated values for potential risk of XSS */
  let tweetHtml = `
    <article class="tweet">
      <header>
        <div>
          <img src="${tweetObj.user.avatars}">
          <span>${escape(tweetObj.user.name)}</span>
        </div>
        <span class="handle">${escape(tweetObj.user.handle)}</span>
      </header>
      <p>${escape(tweetObj.content.text)}</p>
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
$(document).ready(function() {

  /* Fetch tweets array from server and pass array to render function */
  const loadTweets = function(n) {
    $.ajax('/tweets')
      .then(function(data) {
        // If 'n' is specified, call render on nth-last item, *as an [array]*
        if (n) {
          renderTweets([data[data.length - n]]);
        } else {
          renderTweets(data);
        }
      });
  };

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

    /* Validate user input, flash validation message
     * NOTE validation messages specified in composer-char-counter-validator.js */
    const $data = $('#tweet-text');
    if (!$data.val()) {
      $('#tweet-validation-msg').fadeOut(100).fadeIn(200);
      return;
    }
    if ($data.val().length > 140) {
      $('#tweet-validation-msg').fadeOut(100).fadeIn(200);
      return;
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
        $data.val('');
        loadTweets(1);
      });
  });

  loadTweets();
});