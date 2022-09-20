function search(string, api_key) {
  if (string == "") string = "London";
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${string}&limit=5&appid=${api_key}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      return [response[0].lat, response[0].lon];
    })
    .then(function (response) {
      console.log(response);
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${response[0]}&lon=${response[1]}&appid=${api_key}`,
        { mode: "cors" }
      )
      //have lat/lon
      //use this in other api call to get the weather
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
        console.log(response.main);
        console.log(response.main.temp);
        console.log(response.main.feels_like);
    })
    ;
}
//put that into the api call
//spit out the city name
const api_key = "afdbbe4374eaacf50d5b6fd486d109be";
const content = document.querySelector("#content");
const input = document.createElement("input");
content.appendChild(input);
const btn = document.createElement("button");
btn.innerText = "Click";
content.appendChild(btn);
//take in input
//parse input into the city
btn.addEventListener("click", () => {
  let location = input.value;
  search(location, api_key);
});
