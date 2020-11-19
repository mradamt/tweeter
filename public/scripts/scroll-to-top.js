$(document).ready(function() {
  
  // let y = window.scrollY;
  // console.log('hey there', window.scrollY, window.scrollbars)

  // $(window).scroll(() => {
  //   console.log('scrolling?')
  // })


  if ($(window).scrollTop() > 20) {
    console.log('display: block')
    $('#scroll-to-top').css('display', 'block')
  } else {
    console.log('display: none')
    $('#scroll-to-top').css('display', 'none')
  }


})