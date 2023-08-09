const display = document.getElementById('display');
const buttons = document.querySelectorAll('.number, .operator, .clear, .calculate');

let currentInput = '';
let firstOperand = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (currentInput !== '') {
        firstOperand = currentInput;
        currentInput = '';
        operator = value;
        display.value = operator;
      }
    } else if (value === '=') {
      if (currentInput !== '' && firstOperand !== '' && operator !== '') {
        const result = operate(parseFloat(firstOperand), parseFloat(currentInput), operator);
        display.value = result;
        currentInput = result;
        firstOperand = '';
        operator = '';
      }
    } else if (value === 'C') {
      currentInput = '';
      firstOperand = '';
      operator = '';
      display.value = '';
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return null;
  }
}
