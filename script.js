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
    button.addEventListener('click',display);
});

let value = '';
let value1 = 0;
let value2 = '';
let operator = '';
let result;
function display(e) {
    let display = document.querySelector(".display");
    if(this.id === "CLEAR") {
        display.textContent = '';
        value = '';
    }
    else if(this.id === '+' || this.id === '-' || this.id === 'x' || this.id === '/') {
        value1 = +value;
        display.textContent += ` ${this.id} `;
        operator = this.id;
        value = '';
    }
    else if(this.id === 'equal') {
        result = operate(operator,value1,value2);
        display.textContent = result;
    }
    else {
        display.textContent += this.id;
        value += this.id;
        console.log(value1); //console log
    }
    
    value2 = +value;
    console.log(value2); //console log
}
