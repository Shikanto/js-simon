
let numbersToGuess = [];
let numberUserGuessed = [];

for(let i = 0; i < 5; i++){

    randomNumber = createRandomNumber();
    numbersToGuess.push(randomNumber)  

}

alert(`I numeri da ricordare sono: ${numbersToGuess}`)

alert("Ora hai 30 secondi per fare mente locale")

setTimeout(() => {
    checkNumber()
    alert(`Complimenti hai indovinato ${numberUserGuessed.length} numeri`)
    alert(`I numeri indovinati sono ${numberUserGuessed}`)
}, 30000);




function createRandomNumber(min = 0, max = 100) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkNumber (){

    for(let i = 0; i < 5; i++){

        let choiceNumber = prompt("scrivi un numero da 1 a 100");
        for (let x = 0; x < numbersToGuess.length; x++){
            if (choiceNumber == numbersToGuess[x]){
                numberUserGuessed.push(parseInt(choiceNumber));
            }
        }  
        
    }
    
}



console.log(numbersToGuess)
console.log(numberUserGuessed)