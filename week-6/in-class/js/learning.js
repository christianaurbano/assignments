// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let myName = "Christy";
let yourName = "Branden";

if (yourName === "Christy") {
  renderOutput("That's me!");
} else if (yourName === "Branden") {
  renderOutput("That's Branden!")
} 
  else {
  renderOutput("I must be someone else.")
}

function helloWorld() {
  renderOutput("Hello World")
}

helloWorld();
helloWorld();
helloWorld();

function helloName(name) {
  renderOutput ("Hello " + name);
}

helloName("Branden")

function todaysHours(daysHours) {
  renderOutput(daysHours);
}


hours.forEach(todaysHours);