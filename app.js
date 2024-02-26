
let i = 0;
let j = 0;
let userInput = document.getElementById("inputUser");
let userOutput = document.getElementById("outputUser");
let cardIn = document.getElementById("inputMode").classList;
let cardOut = document.getElementById("outputMode").classList;
let warningText = document.getElementById("warningMensage").classList;

function translateCript() {



    for (let i = 0; i < userInput.value.length; i++) {
        let caractere = userInput.value.charAt(i);
        if (caractere === caractere.toUpperCase()) {

            warningText.toggle("activeWarning");

        } else {
            if (j == 0) {
                cardIn.toggle("disable");
                cardOut.toggle("disable");
                j++;
            }

            userOutput.value = userInput.value;

            userOutput.value = userOutput.value.replace(/e/g, "enter");
            userOutput.value = userOutput.value.replace(/i/g, "imes");
            userOutput.value = userOutput.value.replace(/a/g, "ai");
            userOutput.value = userOutput.value.replace(/o/g, "ober");
            userOutput.value = userOutput.value.replace(/u/g, "ufat");
        }
    }
}

function translateDescript() {





    for (let i = 0; i < userInput.value.length; i++) {
        let caractere = userInput.value.charAt(i);
        if (caractere === caractere.toUpperCase()) {

            warningText.toggle("activeWarning");

        } else {
            if (j == 0) {
                cardIn.toggle("disable");
                cardOut.toggle("disable");
                j++;
            }

            userOutput.value = userInput.value;

            userOutput.value = userOutput.value.replace(/enter/g, "e");
            userOutput.value = userOutput.value.replace(/imes/g, "i");
            userOutput.value = userOutput.value.replace(/ai/g, "a");
            userOutput.value = userOutput.value.replace(/ober/g, "o");
            userOutput.value = userOutput.value.replace(/ufat/g, "u");
        }
    }


}

function translatecopy() {

    userOutput.select();

    navigator.clipboard.writeText(userOutput.value);

    window.getSelection().removeAllRanges();
}