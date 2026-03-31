/*In questo progetto svilupperai una semplice applicazione web che simula il comportamento di un counter (contatore).

🎯 Realizza un'applicazione in JavaScript che permetta all’utente di aumentare o diminuire il valore di un counter attraverso due pulsanti, + e −.

Vediamo il funzionamento atteso del counter:

Quando l’utente accede alla pagina, deve visualizzare il valore iniziale del counter impostato a 0.
Devono essere presenti due pulsanti, uno per incrementare (+) e uno per decrementare (−) il valore del counter.
Dopo aver creato dinamicamente gli elementi dell’interfaccia, implementa la funzione che aggiungerà e diminuirà il valore del counter. */
function updateDisplay() {
    countDisplay.textContent = count;
    if (count > 0) countDisplay.style.color = '#27ae60';
    else if (count < 0) countDisplay.style.color = '#c0392b';
    else countDisplay.style.color = '#2c3e50';
}

let count = 0;

const title = document.createElement('h1');
const contenitore = document.getElementById("root");
const buttonminus = document.createElement("button");
const buttonplus = document.createElement("button");
const reset = document.createElement("button");
const countDisplay = document.createElement("h1");

title.textContent = 'Contatore Dinamico JavaScript';

buttonminus.textContent = "-";
buttonplus.textContent = "+";
reset.textContent = "Reset";

countDisplay.textContent = count;

countDisplay.classList.add("numero-counter");
title.classList.add("title-counter");
buttonplus.classList.add("plus-counter");
buttonminus.classList.add("minus-counter");
reset.classList.add("reset-counter");

buttonminus.addEventListener("click", () => {
    count--;
    updateDisplay();
});
buttonplus.addEventListener("click", () => {
    count++;
    updateDisplay();
});
reset.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

contenitore.append(title, countDisplay, buttonminus, reset, buttonplus);