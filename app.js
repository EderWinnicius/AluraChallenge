
let i = 0;

function translateCript() {

    let userInput = document.getElementById("inputUser").value;
    let userOutput = document.getElementById("outputUser").value;
    let cardIn = document.getElementById("inputMode").classList;
    let cardOut = document.getElementById("outputMode").classList;



    console.log(userInput);


    if (userInput == "") {
        console.log("Input Vazio");
    } else if (i == 0) {
        cardIn.toggle("disable");
        cardOut.toggle("disable");
        document.getElementById("outputUser").value = document.getElementById("inputUser").value;
        i++;
    } else {
        document.getElementById("outputUser").value = document.getElementById("inputUser").value;
    }
}