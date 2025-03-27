//dichiarazione DOM

const countdownElement = document.getElementById("countdown");
const instructionsElement = document.getElementById("instructions");
const numbersListElement = document.getElementById("numbers-list");
const answersFormElement = document.getElementById("answers-form");
const inputElements = document.querySelectorAll("#input-group input");
const messageElement = document.getElementById("message");

//variabili di gioco

let numeriDaRicordare= [];
let timer;
const tempoPerRicordare= 10;

//genera 5 numeri casuali

function numeriCasuali(){
    const numeri = [];
    while(numeri.length<5){
        const num = Math.floor(Math.random()* 100)+1;
        if(!numeri.includes(num)){
            numeri.push(num);
        } 
    }
    return numeri;
   
}
const numeriGenerati = numeriCasuali();
console.log("Numeri generati:", numeriGenerati);

//Mostra i numeri da memorizzare

function displayNumber(numbers){
    numbersListElement.innerHTML = "";
    numbers.forEach(num => {
        const li = document.createElement("li");
        li.textContent = num;
        numbersListElement.appendChild(li);
    });
}
displayNumber(numeriGenerati);

//countdown
function startCountdown() {
    let timeLeft = tempoPerRicordare;
    countdownElement.textContent = timeLeft;
    
    timer = setInterval(() => {
      timeLeft--;
      countdownElement.textContent = timeLeft;
      
      if (timeLeft <= 0) {
        clearInterval(timer);
        hideNumbers();
      }
    }, 1000);
  }  
  startCountdown();