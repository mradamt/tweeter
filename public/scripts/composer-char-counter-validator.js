$(document).ready(function() {
  const valdiationMsg = {
    emptyTweet: 'Empty tweets not allowed to be posted',
    tooLong: 'Too long. Tweets are limited to 140 characters'
  };

  // Set initial state (empty tweet)
  $('#tweet-validation-msg').text(valdiationMsg.emptyTweet).fadeOut(100);

  /* Event listener to track character count of text input,
   * update 'counter' immediately, and change colour of counter
   * when negative.
   * Uses 'input' event not 'change' event because "Unlike the input event, the change
   * event is not necessarily fired for each alteration to an element's value."
   * - MDN docs.../change_event
   */
  document.getElementById('tweet-text').addEventListener('input', function() {
    // Traverse tree to find .counter class (output tag) and save to variable
    const $counterEl = $(this).parent().find(".counter");

    // Update counter value immediately with each char entered/deleted
    $counterEl.val(140 - $(this).val().length);

    // Change COLOR of counter element to red when negative
    if ($counterEl.val() < 0) {
      $('.counter').css("color", "#ff0033");
    } else {
      $('.counter').css("color", "inherit");
    }
      
    // Modify validation messages for too short/long tweets based on current length
    if ($counterEl.val() < 0) {
      $('#tweet-validation-msg').text(valdiationMsg.tooLong).fadeIn(300);
    } else if (Number($counterEl.val()) === 140) {
      $('#tweet-validation-msg').text(valdiationMsg.emptyTweet);
    } else {
      $('#tweet-validation-msg').fadeOut(100);
    }
  });
});
