
let i = 0;

function translateCript() {

    let userInput = document.getElementById("inputUser").value;
    let userOutput = document.getElementById("outputUser");
    let cardIn = document.getElementById("inputMode").classList;
    let cardOut = document.getElementById("outputMode").classList;


    for (let i = 0; i < userInput.length; i++) {
        let caractere = userInput.charAt(i);
        if (caractere === caractere.toUpperCase()) {
            console.log("INPUT COM LETRA MAIÚSCULA OU VAZIO");
        } else {
            if (i == 0) {

                userOutput.value = userInput;

                cardIn.toggle("disable");
                cardOut.toggle("disable");

                i++;
            } else {
                userOutput.value = userInput;
            }
        }
    }


}

