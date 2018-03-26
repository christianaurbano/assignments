"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}

let hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];

function dailyHours(hours) {
  var daysHours = hours.split(": ");
  if (daysHours[1] == "closed") {
    renderOutput ("On " + daysHours[0] + " the library is " + daysHours[1]);
  }
  else {
  renderOutput ("On " + daysHours[0] + " the hours are " + daysHours[1]);
  }
}

hours.forEach(dailyHours);