$(document).ready(function() {
  
  $('#composer-toggler').click(function() {
    $('.new-tweet').slideToggle('fast')
    $('#tweet-text').removeAttr('style').focus()
  })
  
})