$(document).ready(function() {

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
      $('.counter').css("color", "red");
    } else {
      $('.counter').css("color", "inherit");
    }
  });
});
