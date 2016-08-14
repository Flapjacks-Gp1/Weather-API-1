$(document).ready(function(){
  var $button = $('#enlighten');
  var $forecast = $('#forecast');

  $button.click(function(){
    $('html, body').animate({
      scrollTop: $forecast.offset().top
    }, 1000);
  });
});
