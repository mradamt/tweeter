$(document).ready(function() {

  /*
   * Text-area auto-resize function taken from a tidy Stackoverflow answer, link:
   * https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
   * scroll to 'A COMPLETE YET SIMPLE SOLUTION' then down to 'OPTION 1 (With jQuery)'
   */
  $('textarea').each(function() {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
  
});