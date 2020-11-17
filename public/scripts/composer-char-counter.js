$(document).ready(function() {
  const $tweetText = document.getElementById('tweet-text');
  // const $tweetText = $('#tweet-text');
  // const $tweetTextVal = $('#tweet-text').val();


  
  // $tweetText.addEventListener('keydown', (event) => {
  //   console.log(event.key)
  //   console.log($('#tweet-text').val())
  // })

  // document.addEventListener('blur', (event) => { 
  //   console.log('blur');
  //   console.log(event);
  // });
  // document.addEventListener('click', (event) => { 
  //   console.log('click');
  //   console.log(event);
  // });
  // document.addEventListener('keydown', (event) => { 
  //   console.log('keydown');
  //   console.log(event);
  // });
  // document.addEventListener('keyup', (event) => { 
  //   console.log('keyup');
  //   console.log(event);
  // });
  $tweetText.addEventListener('change', (event) => { 
    console.log('change');
    console.log(event);
  });
  $tweetText.addEventListener('input', (event) => { 
    console.log('input');
    console.log(event);
    console.log($('#tweet-text').val().length)
  });
})