// Grootte van het speelveld
const grootte = 14;

let schipRij;
let schipKolom;

// Selectie van de HTML elementen
const speelveld = document.querySelector("#speelveld");
const feedback = document.querySelector("#feedback");
const startKnop = document.querySelector("#start-knop");
const timerElement = document.querySelector("#timer");



// Start het spel, zodra je start drukt
startKnop.addEventListener("click", startSpel);


// Functie die in werking gaat
function startSpel() {

  speelveld.innerHTML = "";
  feedback.textContent = "";

  // Genereert een  nieuwe random positie (getal) voor het schip
  schipRij = Math.floor(Math.random() * grootte);
  schipKolom = Math.floor(Math.random() * grootte);

  //Toont de locatie in het logscherm
  console.log("Schip ligt op:", schipRij, schipKolom);


  // Maakt het 14x14 veld
  for (let rij = 0; rij < grootte; rij++) {
    for (let kolom = 0; kolom < grootte; kolom++) 
      
  // zorgt dat de vakjes klikbaar worden
    {  const knop = document.createElement("button");
  
      //opmaak vakje
      knop.classList.add("vakje");
      knop.textContent = "?";
      knop.dataset.rij = rij;
      knop.dataset.kolom = kolom;

      // Voeg klikgebeurtenis toe
      knop.addEventListener("click", controleerVakje);

      speelveld.appendChild(knop);
    }
  }
}

// Controleert of het geklikte vakje het schip bevat
function controleerVakje(event) {
  const knop = event.target;
  const rij = Number(knop.dataset.rij);
  const kolom = Number(knop.dataset.kolom);



// code raak schip
  if (rij === schipRij && kolom === schipKolom) {
    knop.textContent = "B";
    knop.style.backgroundColor = "limegreen";
    feedback.textContent = "Raak! Je hebt het schip gevonden!";

    // Schakel alle knoppen uit - nadat shi raak is
    document.querySelectorAll(".vakje").forEach(vakje => vakje.disabled = true);

  // code fout schip geraakt
  } else {
    knop.textContent = "x";
    knop.disabled = true;
    knop.style.backgroundColor = "red";
    
    feedback.textContent = "Mis! Probeer opnieuw.";
  }
}

let timer = 0;
let intervalId;


// Start de klok bij het starten van het spel
startKnop.addEventListener("click", () => {
  clearInterval(intervalId); // Stopt de oude klok
  timer = 0;
  timerElement.textContent = timer;

  intervalId = setInterval(() => {
    timer++;
    timerElement.textContent = timer;
  }, 1000);
});

// Stop de klok als het schip geraakt wordt
function stopKlok() {
  clearInterval(intervalId);
}

if (rij === schipRij && kolom === schipKolom) {
  stopKlok();

}






      
    
