(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var weatherInterface = require('./../js/weather-interface.js');

$(document).ready(function(){

});

},{"./../js/weather-interface.js":2}],2:[function(require,module,exports){
var apiKey = "20f42e4921da42b173b8342f97d4e8dd";

var convertToCelcius = function(kelvin) {
  return kelvin - 273.15;
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)  {
      $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity +
    "%");
      $(".showWeather2").text("The temperature (in Celcius) in " + city + " is " + convertToCelcius(response.main.temp) + " degrees");
    });
  });
});

},{}]},{},[1]);
