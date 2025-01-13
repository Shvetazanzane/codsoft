/* calculator.js */
let currentOperation = '';
let currentValue = '';

function appendNumber(number) {
    currentValue += number;
    updateResult();
}

function operate(operator) {
    if (currentValue) {
        currentOperation += currentValue + operator;
        currentValue = '';
    }
    updateResult();
}

function calculate() {
    if (currentValue) {
        currentOperation += currentValue;
        currentValue = eval(currentOperation);
        currentOperation = '';
    }
    updateResult();
}

function clearResult() {
    currentValue = '';
    currentOperation = '';
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentOperation + currentValue;
}
