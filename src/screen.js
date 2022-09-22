const content = document.querySelector("#content");

const screen = ( () => {
    const container = document.querySelector('#info-container');
    function display(information) {
        container.classList.add('active');
        
        const temp = document.querySelector('#temp');
        const feels_temp = document.querySelector('#feels_temp');
        const pressure = document.querySelector('#pressure');
        const humidity = document.querySelector('#humidity');
        const temp_max = document.querySelector('#temp_max');
        const temp_min = document.querySelector('#temp_min');

        temp.textContent = `Temperature: ${information.temp}`;
        feels_temp.textContent = `Feels like: ${information.feels_like}`;
        pressure.textContent = `Pressure: ${information.pressure}`;
        humidity.textContent = `Humidity: ${information.humidity}`;
        temp_max.textContent = `Max Temp: ${information.temp_max}`;
        temp_min.textContent = `Min Temp: ${information.temp_min}`;
    }

    return {display};
})();

export default screen;