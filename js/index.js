console.log("Hello world");

const result = () => (Math.random() < .5) ? "Heads" : "Tails";

document.querySelector(".random-button").addEventListener("click", () => {
  const myResult = result();
  document.querySelector("#result").textContent = myResult;
  document.querySelector("#result-img").src = "resources/" + myResult.toLocaleLowerCase() + ".svg";
})