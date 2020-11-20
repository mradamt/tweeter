$(document).ready(function() {
  
  /* 'Zoom' effect on icon below 'write a tweet' in navbar */
  $('#navbar-right-side').hover(function() {
    $('#navbar-right-side img').css('transform', 'scale(1.25)')
  }, function() {
    $('#navbar-right-side img').css('transform', 'scale(1)')
  })
  
  /* Toggle tweet composer section into/out of view on click
   * and focus curser into textarea ready to type */
  $('#navbar-right-side').click(function() {
    $('.new-tweet').slideToggle('fast')
    $('#tweet-text').removeAttr('style').focus()
  })
  
})