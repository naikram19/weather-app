var temperature = parseInt(prompt("What's the temperature like in degrees celcius?"));
var raining = confirm("is it raining? click 'ok' if it is, otherwise 'cancel'. ");
if (temperature < 0) {
  console.log(alert("Brr! Don't freeze out there!"));
} else if (temperature < 15 && raining) {
  console.log(alert("Dont forget a jacket!"));
} else if (temperature < 25) {
  console.log(alert("Have a nice day :)"));
} else {
  console.log(alert("Keep cool today!"));
}