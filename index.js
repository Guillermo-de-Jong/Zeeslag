// Grootte van het speelveld
const grootte = 14;

let schipRij;
let schipKolom;
let timer = 0;
let intervalId;

// Selectie van de HTML elementen
const speelveld = document.querySelector("#speelveld");
const feedback = document.querySelector("#feedback");
const startKnop = document.querySelector("#start-knop");
const timerElement = document.querySelector("#timer");

// Start het spel zodra je op start drukt
startKnop.addEventListener("click", startSpel);

// Functie die het spel start
function startSpel() {
  // Reset speelveld en feedback
  speelveld.innerHTML = "";
  feedback.textContent = "";

  // Genereer nieuwe positie voor het schip
  schipRij = Math.floor(Math.random() * grootte);
  schipKolom = Math.floor(Math.random() * grootte);
  console.log("Schip ligt op:", schipRij, schipKolom);

  // Reset en start klok
  resetKlok();

  // Maak speelveld (14x14)
  for (let rij = 0; rij < grootte; rij++) {
    for (let kolom = 0; kolom < grootte; kolom++) {
      const knop = document.createElement("button");
      knop.classList.add("vakje");
      knop.textContent = "?";
      knop.dataset.rij = rij;
      knop.dataset.kolom = kolom;
      knop.addEventListener("click", controleerVakje);
      speelveld.appendChild(knop);
    }
  }
}

// Klok functies
function resetKlok() {
  clearInterval(intervalId);
  timer = 0;
  timerElement.textContent = timer;
  intervalId = setInterval(() => {
    timer++;
    timerElement.textContent = timer;
  }, 1000);
}

function stopKlok() {
  clearInterval(intervalId);
}

// Controleer of het vakje het schip bevat
function controleerVakje(event) {
  const knop = event.target;
  const rij = Number(knop.dataset.rij);
  const kolom = Number(knop.dataset.kolom);

  if (rij === schipRij && kolom === schipKolom) {
    knop.textContent = "B";
    knop.style.backgroundColor = "limegreen";
    feedback.textContent = `Raak! Je hebt het schip gevonden in ${timer} seconden!`;
    stopKlok();

    // Schakel alle vakjes uit
    document.querySelectorAll(".vakje").forEach(vakje => vakje.disabled = true);
  } else {
    knop.textContent = "x";
    knop.disabled = true;
    knop.style.backgroundColor = "red";
    feedback.textContent = "Mis! Probeer opnieuw.";
  }
}
