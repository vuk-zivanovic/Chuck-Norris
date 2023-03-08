// Za sledeci zadatak koristiti API na adresi https://api.chucknorris.io/

// Pocetna strana treba da sadrzi combombox gde ce koji ce biti popunjen kategorijama.
// Takodje treba u tom comboboxu da bude opcija "All".
// U zavisnosti od izabrane kategorije, kada korisnik pritisne na dugme "Show joke" korisniku u prozoru ispod treba da izadje vic.

// Koriscenje css-a, html-a radi ulepsavanja izbora i prikaza je prepusteno developeru.

/////////////////////////////////////////////////////////////////////

const button = document.getElementById("btn");
const dropdown = document.getElementById("jokes");
const onScreenJoke = document.getElementById("joke-screen");

const showJoke = async function () {
  if (dropdown.value !== "all") {
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${dropdown.value}`
    );
    const myJson = await response.json();

    onScreenJoke.textContent = myJson.value;
  } else {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const myJson = await response.json();

    onScreenJoke.textContent = myJson.value;
  }
};

button.addEventListener("click", showJoke);

const categoriesFunc = async function () {
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const myJson = await response.json();
  const res = [];

  for (let i in myJson) res.push([myJson[i]]);
  const categoriesArr = res.flat();

  for (let i in categoriesArr) {
    const dropdownCat = document.createElement("option");
    dropdownCat.textContent = categoriesArr[i];
    dropdown.appendChild(dropdownCat);
  }
};

categoriesFunc();
