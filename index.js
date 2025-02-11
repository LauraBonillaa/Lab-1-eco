document.getElementById("fetchcat-button").addEventListener("click", fetchcatData);

async function fetchcatData() {

renderLoadingState();

try {
  const response = await fetch("https://catfact.ninja/fact");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  renderData(data);
  console.log(data)
} catch (error) {
  renderErrorState();

}
}
fetchcatData()


function renderErrorState() {
const container = document.getElementById("datagato-container");
container.innerHTML = ""; // Clear previous data
container.innerHTML = "<p>Failed to load data</p>";
console.log("Failed to load data");
}

function renderLoadingState() {
const container = document.getElementById("datagato-container");
container.innerHTML = ""; // Clear previous data
container.innerHTML = "<p>Loading...</p>";
console.log("Loading...");
}

function renderData(data) {
const container = document.getElementById("datagato-container");
container.innerHTML = ""; // Clear previous data

const div = document.createElement("div");
div.className = "item";
div.innerHTML = ` <p>${data?.fact}</p>`;
container.appendChild(div);
}

document.getElementById("genterandom-button").addEventListener("click", fetchpeopleData);

async function fetchpeopleData() {

renderpeopleLoadingState();

try {
  const peopleresponse = await fetch("https://randomuser.me/api/");
  if (!peopleresponse.ok) {
    throw new Error("Network response was not ok");
  }
  const peopledata = await peopleresponse.json();
  renderpeopleData(peopledata);
  console.log(peopledata)
} catch (error) {
  renderpeopleErrorState();

}
}
fetchpeopleData()


function renderpeopleErrorState() {
const container = document.getElementById("genterandom-container");
container.innerHTML = ""; // Clear previous data
container.innerHTML = "<p>Failed to load data</p>";
console.log("Failed to load data");
}

function renderpeopleLoadingState() {
const container = document.getElementById("genterandom-container");
container.innerHTML = ""; // Clear previous data
container.innerHTML = "<p>Loading...</p>";
console.log("Loading...");
}

function renderpeopleData(person) {
const container = document.getElementById("genterandom-container");
container.innerHTML = ""; // Clear previous data

const div = document.createElement("div");
div.className = "item2";
div.innerHTML = ` <img src="${person?.results[0].picture.large}" alt="Person">`;
container.appendChild(div);
}