$(document).ready(function() {

  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?q=Newyork,us&APPID=0eec4607e883c2bf585ccb2ea720e1cd';
  var data1 = {
    q : "New York, NY",
    units : "imperial"
  };
  var data2 = {
    q: "New York, NY",
    units : "metric"
  };


  function showWeather(weatherReport) {
    var $temperature = $('#temperature').text(weatherReport.main.temp);
    var thetemperature = parseInt(document.getElementById('temperature').innerHTML);
    $('temperature').text(thetemperature);
  };

  $.getJSON(weatherAPI, data1, showWeather)

  $( "#changeUnit" ).click(function() {
    if ( data1.units === "imperial") {
      data = "metric";
    } else {
      data = "imperial";
    };
  });

});
