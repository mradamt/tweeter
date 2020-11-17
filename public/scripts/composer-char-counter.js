$(document).ready(function() {
  document.getElementById('tweet-text').addEventListener('input', function() { 
    const counter = 140 - $(this).val().length
    $(this).parent().find(".counter").val(counter)
  });
})
