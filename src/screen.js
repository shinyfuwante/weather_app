const screen = (() => {
  const container = document.querySelector("#info-container");
  function display(information, locationName) {
    container.classList.add("active");
    
    const location = document.querySelector("#location");
    const temp = document.querySelector("#temp");
    const feelsTemp = document.querySelector("#feels_temp");
    const pressure = document.querySelector("#pressure");
    const humidity = document.querySelector("#humidity");
    const tempMax = document.querySelector("#temp_max");
    const tempMin = document.querySelector("#temp_min");

    location.textContent = `Location: ${locationName}`;
    temp.textContent = `Temperature: ${information.temp}`;
    feelsTemp.textContent = `Feels like: ${information.feels_like}`;
    pressure.textContent = `Pressure: ${information.pressure}`;
    humidity.textContent = `Humidity: ${information.humidity}`;
    tempMax.textContent = `Max Temp: ${information.temp_max}`;
    tempMin.textContent = `Min Temp: ${information.temp_min}`;
  }

  return { display };
})();

export default screen;
