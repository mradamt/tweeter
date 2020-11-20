$(document).ready(function() {

  /* 'Zoom' effect on icon below 'write a tweet' in navbar */
  $('#navbar-right-side').hover(function() {
    $('#navbar-right-side img').css('transform', 'scale(1.25)');
  }, function() {
    $('#navbar-right-side img').css('transform', 'scale(1)');
  });
  
  /* Function to clean up styles added composer textarea on slideDown()
   * or slideToggle(), and scroll the window so composer is in view */
  const tidyUpComposer = () => {
    $('#tweet-text').removeAttr('style').focus();
    $(window).scrollTop(0);
  };

  /* Toggle tweet composer section into/out of view on click
   * and focus curser into textarea ready to type */
  $('#navbar-right-side').click(function() {
    $('.new-tweet').slideToggle('fast');
    tidyUpComposer();
  });

  /* Scroll-to-top button appears when window is scrolled down*/
  if ($(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
      $('#scroll-to-top').fadeIn();
    } else {
      $('#scroll-to-top').fadeOut();
    }
  }));

  /* Scroll to top and ensure composer is OPEN when we get there */
  $('#scroll-to-top').click(function() {
    $('.new-tweet').slideDown('fast');
    tidyUpComposer();
  });
  
});