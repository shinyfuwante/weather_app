import weatherSearcher from "./weather";
import screen from "./screen";


const api_key = "afdbbe4374eaacf50d5b6fd486d109be";
const content = document.querySelector("#content");
const input = document.querySelector("#input");
const btn = document.querySelector("#button");
btn.innerText = "Click";
btn.addEventListener("click", async () => {
  const information = await weatherSearcher.searchASAW(input.value, api_key);
  console.log(information);
  screen.display(information);
});
