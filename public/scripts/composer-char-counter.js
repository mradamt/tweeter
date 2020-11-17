$(document).ready(function() {
  document.getElementById('tweet-text').addEventListener('input', function() { 
    // console.log(140 - this.value.length)
    console.log(140 - $(this).val().length)

  });
})