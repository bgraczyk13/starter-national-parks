const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  console.log("You clicked the name sorter");
});
