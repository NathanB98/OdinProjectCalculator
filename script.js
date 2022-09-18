let currentOperation = null;
let firstTerm = '';
let secondTerm = '';
let updateScreen = false;

const NUMBER_BUTTONS = document.querySelectorAll('[data-number]');
const OPERATOR_BUTTONS = document.querySelectorAll('[data-operator]');
const DECIMAL_BUTTON = document.getElementById('decimalBtn');
const EQUALS_BUTTON = document.getElementById('equalsBtn');
const CLEAR_BUTTON = document.getElementById('clearBtn');
const DELETE_BUTTON = document.getElementById('deleteBtn');
const FIRST_OPERATION_SCREEN = document.getElementById('firstTermScreen');
const SECOND_OPERATION_SCREEN = document.getElementById('secondTermScreen');

EQUALS_BUTTON.addEventListener('click', evaluate);
CLEAR_BUTTON.addEventListener('click', clearScreen);
DELETE_BUTTON.addEventListener('click', deleteNum);
DECIMAL_BUTTON.addEventListener('click', setDecimal);
window.addEventListener('keydown', keyboardInput);

NUMBER_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
        updateNumber(button.textContent);
    });
});

OPERATOR_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
        updateOperation(button.textContent);
    });
});

//Handles the any user input from the keyboard.
function keyboardInput(e) {
    if(e.key >= 0 && e.key <= 9) updateNumber(e.key);
    if(e.key === '.') setDecimal();
    if(e.key === '=' || e.key === 'Enter') evaluate();
    if(e.key === 'Backspace') deleteNum();
    if(e.key === 'Escape') clearScreen();
    if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' ){
        updateOperation(e.key);
    }
}

//Adds a decimal to the current term being entered.
function setDecimal() {
    if(updateScreen) resetScreen();
    if(SECOND_OPERATION_SCREEN.textContent === '') {
        SECOND_OPERATION_SCREEN.textContent = '0';
    }
    if(SECOND_OPERATION_SCREEN.textContent.includes('.')) return;
    SECOND_OPERATION_SCREEN.textContent += '.';
}

//Deletes the last number added to the current term the user is entering.
function deleteNum() {
    SECOND_OPERATION_SCREEN.textContent = SECOND_OPERATION_SCREEN.textContent.toString().slice(0, -1);
}

//Clears screen of the expression and the result. Resets variables for further use.
function clearScreen() {
    SECOND_OPERATION_SCREEN.textContent = '0';
    FIRST_OPERATION_SCREEN.textContent = '';
    firstTerm = '';
    secondTerm = '';
    currentOperation = null;
}

function roundAnswer (num) {
    return Math.round(num * 1000) / 1000;
}

//Checks if a valid operation can be performed. Gets the answer. Output answer.
function evaluate() {
    if(currentOperation === null || updateScreen) return;
    if(currentOperation === '/' && currentOperation.textContent === '0') return;
    secondTerm = SECOND_OPERATION_SCREEN.textContent;
    SECOND_OPERATION_SCREEN.textContent = roundAnswer(operate(currentOperation, firstTerm, secondTerm));
    FIRST_OPERATION_SCREEN.textContent = `${firstTerm} ${currentOperation} ${secondTerm} = `;
    currentOperation = null;
}

//Set the operator to the user selection.
function updateOperation(operator) {
    if(currentOperation !== null) evaluateInputs();
    firstTerm = SECOND_OPERATION_SCREEN.textContent;
    currentOperation = operator
    FIRST_OPERATION_SCREEN.textContent = `${firstTerm} ${currentOperation}`;
    updateScreen = true;
}

//Appends number to current term being constructed.
function updateNumber(num) {
    if(SECOND_OPERATION_SCREEN .textContent === '0' || updateScreen) {
        resetScreen();
    }
    
    SECOND_OPERATION_SCREEN.textContent += num;
}

function resetScreen() {
    SECOND_OPERATION_SCREEN.textContent = '';
    updateScreen = false;
}

//Converts both term strings to numbers. Uses operator to run appropriate operation on given values.
function operate(operator, valueA, valueB) {
    valueA = Number(valueA);
    valueB = Number(valueB);

    switch(operator) {
        case "+":
            return addition(valueA, valueB);
        case "-":
            return subtraction(valueA, valueB);
        case "x":
            return multiplication(valueA, valueB);
        case "/":
            if(valueA === 0 || valueB === 0) {
                alert('You cannot divide by 0');
                return null
            } else {
                return division(valueA, valueB);
            }
        default:
            return null;
    }

}

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    return x / y;
}