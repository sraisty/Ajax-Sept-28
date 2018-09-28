"use strict";


// PART 1: SHOW A FORTUNE
function displayFortune(results) {
  // the result from the /fortune route is a string with a fortune
  let fortune = results;
  $('#fortune-text').html(fortune);
}


function showFortune(evt) {
  $.get('/fortune', displayFortune);
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function displayWeather(result) {
  let weather_info = result;
  $('#weather-info').html(weather_info.forecast);
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, displayWeather);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

function displayOrderStatus(result) {
  let status_string = `Code: ${result.code}, Message: ${result.msg}`;
  $('#order-status').html(status_string);
}

function orderMelons(evt) {
    evt.preventDefault();
    let formData = {
      "melon_type":$('#melon-type-field').val(),
      "qty":$('#qty-field').val(),
    };


  $.post('/order-melons.json',formData,displayOrderStatus);
}

$("#order-form").on('submit', orderMelons);


