import getData from "./api.js";
import clearDom from "./clearDom.js";
import populate from "./populateDom.js";

const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  clearDom();

  populate(input.value, "celcius");
});

populate("marcos+paz", "celcius");
