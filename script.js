function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate(operator,a,b) {
    if(operator === '+')
        return add(a,b);
    else if(operator === '-')
        return subtract(a,b);
    else if(operator === 'x')
        return multiply(a,b);
    else if(operator === '/')
        return divide(a,b);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click',calculate);
});

let value = '';
let value1 = '';
let value2 = '';
let operator = '';
let result;
let display = document.querySelector(".display");
display.textContent = '';
let opCount = 0;
let opResult = '';

function calculate(e) {
    if(this.id === "clear") {
        display.textContent = '';
        value = '';
        value1 = '';
        value2 = '';
    }
    else if(this.id === '+' || this.id === '-' || this.id === 'x' || this.id === '/') {
        opCount++;
        if(opCount > 1) {
            display.textContent += ` ${this.id} `;
            opResult = operate(operator,value1,value2);
            value1 = opResult;
            operator = this.id;
            value = '';
        }
        else {
            value1 = +value;
            display.textContent += ` ${this.id} `;
            operator = this.id;
            value = '';
        }
    }
    else if(this.id === 'equal') {
        result = operate(operator,value1,value2);
        display.textContent = result;
        value = result;
        opCount = 0;
    }
    else {
        display.textContent += this.id;
        value += this.id;
    }
    
    value2 = +value;
}
