$(document).ready(function () {



var load = function () {
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
    datatype: 'json',
  }).done(successFunction)
    .fail(failFunction);
};



function successFunction(data, dataType, status) {
    alert(data);
  }


  // fail function
  function failFunction(request, textStatus, errorThrown) {
    alert(request.status + " " + textStatus + " " + errorThrown);
  }

});
