let operator;

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