const weatherSearcher = (() => {
  /* Using Promises to call an API to get the lat/lon of an input
   * and then using promises to get the weather report for that lat/lon.
   */
  function search(string, api_key) {
    // eslint-disable-next-line no-param-reassign
    if (string === "") string = "London";
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${string}&limit=5&appid=${api_key}`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => [response[0].lat, response[0].lon])
      .then((response) => {
        console.log(response);
        return fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${response[0]}&lon=${response[1]}&appid=${api_key}`,
          { mode: "cors" }
        );
        // have lat/lon
        // use this in other api call to get the weather
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.main);
        console.log(response.main.temp);
        console.log(response.main.feels_like);
      });
  }

  async function getCoordinatesJsonASAW(string, api_key) {
    try {
      if (string == "") string = "London";
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${string}&limit=5&appid=${api_key}`,
        { mode: "cors" }
      );
      return response.json();
    } catch (error) {
      alert(error);
      return null;
    }
  }

  async function getReportASAW([lat, lon], api_key) {
    const report = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`,
      { mode: "cors" }
    );
    return report.json();
  }

  async function searchASAW(string, api_key) {
    const coordinates_json = await getCoordinatesJsonASAW(string, api_key);
    const [lat, lon] = [coordinates_json[0].lat, coordinates_json[0].lon];
    const report = await getReportASAW([lat, lon], api_key);
    const information = report.main;

    return information;
  }

  return { searchASAW };
})();

export default weatherSearcher;
