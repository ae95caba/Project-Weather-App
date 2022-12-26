async function getData(city, unitsType) {
  try {
    let units = "";
    if (unitsType === "celcius") {
      units = "&units=metric";
    } else if (unitsType === "fahrenheit") {
      units = "&units=imperial";
    }
    const key = "dd7479fbbf0f8a1397061b1195ec8864";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}${units}`;
    const response = await fetch(url, {
      mode: "cors",
    });
    const obj = await response.json();
    const newObj = {
      temp: {
        feeling: obj.main.feels_like,
        value: obj.main.temp,
        max: obj.main.temp_max,
        min: obj.main.temp_min,
      },
      description: obj.weather[0].description,
      humidity: obj.main.humidity,
      country: obj.sys.country,
      name: obj.name,
    };

    return newObj;
  } catch (error) {
    alert(error);
  }
}

export default getData;
