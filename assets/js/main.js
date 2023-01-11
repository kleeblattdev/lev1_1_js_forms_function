const number = document.getElementById("number");

const formOutput = document.getElementById("result");

function doubleResult(){
    const userInput = number.value;

    formOutput.innerHTML = userInput * 2;
}