let operation = null;
let firstTerm = '';
let secondTerm = '';

const NUMBER_BUTTONS = document.querySelectorAll('[data-number]');
const OPERATOR_BUTTONS = document.querySelectorAll('data-operator');
const DECIMAL_BUTTON = document.getElementById('decimalBtn');
const EQUALS_BUTTON = document.getElementById('equalsBtn');
const CLEAR_BUTTON = document.getElementById('clearBtn');
const DELETE_BUTTON = document.getElementById('deleteBtn');
const FIRST_TERM_SCREEN = document.getElementById('firstTermScreen');
const SECOND_TERM_SCREEN = document.getElementById('secondTermScreen');

function operate(operator, valueA, valueB) {
    switch(operator) {
        case "add":
            addition(valueA, valueB);
            break;
        case "minus":
            subtraction(valueA, valueB);
            break;
        case "multiply":
            multiplication(valueA, valueB);
            break;
        case "divide":
            division(valueA, valueB);
            break;
    }

}

function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    console.log('sub works');
    return x - y;
}

function multiplication(x, y) {
    console.log('multi works');
    return x * y;
}

function division(x, y) {
    console.log('division works');
    return x / y;
}