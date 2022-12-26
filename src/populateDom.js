import getData from "./api.js";

async function populate(city, unit) {
  console.log("populate running");

  const tempDiv = document.getElementById("temp");
  const mainDiv = document.getElementById("main");
  const otherDiv = document.getElementById("other");
  const descriptionDiv = document.getElementById("description");

  let newObj = await getData(city, unit);

  for (const property in newObj.temp) {
    const p = document.createElement("p");
    p.innerText = property + ":" + " " + newObj.temp[property];

    tempDiv.appendChild(p);
  }

  mainDiv.innerText = `${newObj.name}, ${newObj.country}`;

  descriptionDiv.innerText = newObj.description;
  const pHumidity = document.createElement("p");
  pHumidity.innerText = `Humidity: ${newObj.humidity}`;

  otherDiv.appendChild(pHumidity);
}

export default populate;
