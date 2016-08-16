$(document).ready(function() {
  var $exportTable = $('.export-table');
  var $exportContent = $('.export-content');
  var $button = $('#enlighten');
  var $forecastSection = $('#forecast')
  var $forecast  = $("#forecast-template").html();
  var forecastTemplate = Handlebars.compile($forecast);

  $button.click(function(){
    $('html, body').animate({
      scrollTop: $forecastSection.offset().top
    }, 1000);
  });

  var loadWeather = function () {
  $.ajax({
    url: 'https://simple-weather.p.mashape.com/weatherdata',
     headers: {
             'X-Mashape-Key': 'm2TVGB0dPmmshjy3VWzjORBnsy2tp14BP2DjsnrrXLsRuhozEG',
             'Accept': 'application/json'
           },
     type: 'GET',
     data: {
     lat: 1.290270,
     lng: 103.851959
     },
     async: true,
     crossDomain: true,
     dataType: "json",
   }).done(successFunction)
     .fail(failFunction);
  };

  //success function
  function successFunction(data) {
    console.log(data.query.results.channel.item.description);
    var forecast = data.query.results.channel.item.forecast;
    $exportContent.append(forecastTemplate(forecast.splice(5, 5)));
    // for(i = 0; i < forecast.length; i++) {
    //   $exportContent.append("<tr><td>" + forecast[i].code + "</td><td>" + forecast[i].date + "</td><td>" + forecast[i].day + "</td><td>" + forecast[i].high + "</td><td>" + forecast[i].low + "</td><td>" + forecast[i].text + "</td></tr>");
    // };
  };

  // fail function
 function failFunction(request, textStatus, errorThrown) {
       alert(request.status + " " + textStatus + " " + errorThrown);
 };

  Handlebars.registerHelper('limit', function (arr, limit) {
  if (!_.isArray(arr)) { return []; } // remove this line if you don't want the lodash/underscore dependency
  return arr.slice(0, limit);
  });

  loadWeather();

});
