//dichiarazione DOM

const countdownElement = document.getElementById("countdown");
const instructionsElement = document.getElementById("instructions");
const numbersListElement = document.getElementById("numbers-list");
const answersFormElement = document.getElementById("answers-form");
const inputElements = document.querySelectorAll("#input-group input");
const messageElement = document.getElementById("message");

//variabili di gioco

let numeriDaRicordare = [];
let timer;
const tempoPerRicordare = 5;

//genera 5 numeri casuali

function numeriCasuali() {
    const numeri = [];
    while (numeri.length < 5) {
        const num = Math.floor(Math.random() * 50) + 1;
        if (!numeri.includes(num)) {
            numeri.push(num);
        }
    }
    return numeri;

}
const numeriGenerati = numeriCasuali();
console.log("Numeri generati:", numeriGenerati);

//Mostra i numeri da memorizzare

function displayNumber(numbers) {
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
//nascondere i numeri e mostra form
function hideNumbers() {
    numbersListElement.innerHTML = "";
    answersFormElement.classList.remove("d-none");
    instructionsElement.textContent = "Inserisci quelli che ricordi!";
}

//Confronta risposte

function checkAnswer(){
    const userAnswer = [];
    for(let i = 0; i < inputElements.length; i++){
        userAnswer.push(parseInt(inputElements[i].value))
    }
}

const correctNumbers = [];
for(let i =0; i<numeriDaRicordare.length; i++){
    if(userAnswer.includes(numeriDaRicordare[i])){
        correctNumbers.push(numeriDaRicordare[i]);
    }
}
