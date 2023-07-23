const display = document.getElementById("display");
const display2 = document.getElementById("display2");

let firstNum = 0;
let secondNum = 0;

let result = 0;

let fisrtNumCheck = false;
let equalCheck = false;
let resetTyping = false;
let currentOperation = "";

function addNumberToDisplay(number) {
    if (resetTyping) {
        display.textContent = 0;
        resetTyping = false;
    }
    if (display.textContent == 0)
        display.textContent = number;
    else display.textContent += number;
}

function backspace() {
    if (display.textContent.length > 1)
        display.textContent = display.textContent.slice(0, -1);
    else if (display.textContent.length == 1 && display.textContent != 0)
        display.textContent = 0;
}

function ac() {
    firstNum = 0;
    secondNum = 0;
    result = 0;
    display.textContent = 0;
    display2.textContent = " ";

    fisrtNumCheck = false;
    equalCheck = false;
    currentOperation = "";
}

function operate(operation) {
    if (operation != "=") {
        currentOperation = operation;

        if (!fisrtNumCheck) {

            firstNum = Number(display.textContent);
            display2.textContent = `${firstNum} ${currentOperation} `
            fisrtNumCheck = true;
            resetTyping = true;
        }
        else if (fisrtNumCheck) {
            secondNum = Number(display.textContent);
            display2.textContent += `${secondNum} ${currentOperation} `
            resetTyping = true;
            getResult(currentOperation);
        }
    } else {
        if (fisrtNumCheck) {
            secondNum = Number(display.textContent);
            getResult(currentOperation);
            currentOperation = operation;
            display2.textContent += `${secondNum} ${currentOperation} `
            resetTyping = true;
        }
    }
}

function getResult(currentOperation) {
    if (currentOperation == "+") {
        result += addition(firstNum, secondNum);
    } else if (currentOperation == "-") {
        result += subtraction(firstNum, secondNum);
    } else if (currentOperation == "*") {
        result += multiplication(firstNum, secondNum);
    } else if (currentOperation == "/") {
        result += division(firstNum, secondNum);
    }

    console.log(result);
    display.textContent = result;
}


// function operate(operation) {

//     if (!fisrtNumCheck && operation != "equal") {
//         firstNum = Number(display.textContent);
//         currentOperation = operation;

//         display2.textContent += firstNum
//         fisrtNumCheck = true;
//     }
//     else if (fisrtNumCheck) {

//         secondNum = Number(display.textContent);
//         display2.textContent += ` ${currentOperation} ` + secondNum

//         if (currentOperation == "+") {
//             // display.textContent = addition(firstNum, secondNum);
//         } else if (currentOperation == "-") {
//             // display.textContent = subtraction(firstNum, secondNum);
//         } else if (currentOperation == "*") {
//             // display.textContent = multiplication(firstNum, secondNum);
//         } else if (currentOperation == "/") {
//             // display.textContent = division(firstNum, secondNum);
//         }

//         currentOperation = operation;

//         firstNum = secondNum;
//     }

// }

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}